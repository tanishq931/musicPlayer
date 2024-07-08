import React, {useContext, useEffect} from 'react';
import Player from '../../Components/MusicPlayer/MusicPlayer';
import MusicList from '../../Components/MusicList/MusicList';
import HomeContainer from '../../Containers/HomeContainer/HomeContainer';
import AppBar from '../../Components/AppBar/AppBar';
import {navigationRef} from '../../Navigation.js/Navigation';
import {useRoute} from '@react-navigation/native';
import {useTrackPlayer} from '../../Hooks/useTrackPlayer';
import {MusicContext} from '../../Context/musicContext';
import {
  setIsPlaying,
  setSelectedIndex,
  setSelectedMusic,
} from '../../Context/reducers';
import {Event} from 'react-native-track-player';

function SongPlayer() {
  const routes = useRoute();
  const musicList = routes?.params?.musicList;
  const {player, addSong} = useTrackPlayer();
  const [musicState, musicDispatch] = useContext(MusicContext);

  const onPressIcon = (val, index) => {
    if (musicState?.selectedMusic?.title === val.title) {
      if (musicState?.isPlaying) {
        musicDispatch(setIsPlaying(false));
      } else {
        musicDispatch(setIsPlaying(true));
      }
    } else {
      musicDispatch(setIsPlaying(true));
      addSong(val);
      musicDispatch(setSelectedIndex(index));
      musicDispatch(setSelectedMusic(val));
    }
  };

  // useEffect(() => {
  //   checkList();
  // }, [musicList.length]);

  // async function checkList() {
  //   await player.pause();
  //   await player.remove(0);
  //   if (musicList.length === 0) {
  //     navigationRef.navigate('HOME_SCREEN');
  //   }
  // }
  const musicIndex = musicState?.selectedIndex;
  useEffect(() => {
    const queueEndedSubscription = player.addEventListener(
      Event.PlaybackQueueEnded,
      async data => {
        if (musicState?.autoPlay) {
          // let nextIndex =
          //   musicIndex === musicList?.length - 1 ? 0 : musicIndex + 1;
          // const val = musicList[nextIndex];
          // addSong(val);
          // musicDispatch(setSelectedMusic(musicList[nextIndex]));
          // musicDispatch(setSelectedIndex(nextIndex));
          playNextSong();
        } else {
          player.seekTo(0);
          musicDispatch(setIsPlaying(false));
        }
      },
    );
    return () => {
      queueEndedSubscription.remove();
    };
  }, [musicState]);

  if (musicState?.selectedMusic) {
    if (musicState?.isPlaying) {
      player.play();
    } else {
      player.pause();
    }
  }

  const playNextSong = async () => {
    let nextIndex = musicIndex === musicList?.length - 1 ? 0 : musicIndex + 1;
    const val = musicList[nextIndex];
    await addSong(val);
    await musicDispatch(setSelectedMusic(musicList[nextIndex]));
    await musicDispatch(setSelectedIndex(nextIndex));
  };

  return (
    <HomeContainer>
      <AppBar
        onPress={() => {
          navigationRef.goBack();
        }}
      />
      {musicList?.length > 0 && <Player />}
      <MusicList
        musicList={musicList}
        onPressIcon={onPressIcon}
        onPressPlay={onPressIcon}
        Son
      />
    </HomeContainer>
  );
}

export default SongPlayer;
