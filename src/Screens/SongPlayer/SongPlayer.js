import React, {useContext, useEffect, useRef, useState} from 'react';
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
  toggleShuffle,
} from '../../Context/reducers';
import {Event} from 'react-native-track-player';
import {removeElement, useShuffle} from '../../Hooks/useShuffle';

function SongPlayer() {
  const routes = useRoute();
  const musicList = routes?.params?.musicList;
  const {player, addSong} = useTrackPlayer();
  const [musicState, musicDispatch] = useContext(MusicContext);
  const [shuffleList, setShuffleList] = useState(musicList);
  const [musicIndex, setMusicIndex] = useState(musicState?.selectedIndex);

  const onPressIcon = (val, index) => {
    if (musicState?.selectedMusic?.title === val.title) {
      if (musicState?.isPlaying) {
        musicDispatch(setIsPlaying(false));
      } else {
        musicDispatch(setIsPlaying(true));
      }
    } else {
      musicDispatch(setIsPlaying(true));
      playSong(index);
    }
  };
  useEffect(() => {
    checkList();
    return () => {
      musicDispatch(toggleShuffle(false));
    };
  }, [musicList.length]);

  async function checkList() {
    if (musicList?.length == 0) {
      await musicDispatch(setIsPlaying(false));
      navigationRef.navigate('HOME_SCREEN');
    }
  }
  useEffect(() => {
    const queueEndedSubscription = player.addEventListener(
      Event.PlaybackQueueEnded,
      async data => {
        if (musicState?.autoPlay) {
          playNextSong(musicIndex);
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

  const playNextSong = musicIndex => {
    let nextIndex = musicIndex === musicList?.length - 1 ? 0 : musicIndex + 1;
    playSong(nextIndex);
  };

  const playPrevSong = () => {
    let prevIndex = musicIndex === 0 ? musicList.length - 1 : musicIndex - 1;
    playSong(prevIndex);
  };

  const playSong = async index => {
    const val = shuffleList[index];
    await addSong(val);
    await musicDispatch(setSelectedMusic(val));
    await musicDispatch(setSelectedIndex(index));
    setMusicIndex(index);
  };
  useEffect(() => {
    shuffleSongs();
  }, [musicState?.shuffle]);

  async function shuffleSongs() {
    if (musicState?.shuffle) {
      const arrToShuffle = removeElement(shuffleList, musicIndex);
      const shuffledArr = useShuffle(arrToShuffle);
      setShuffleList([musicState?.selectedMusic, ...shuffledArr]);
      setMusicIndex(0);
      await musicDispatch(setSelectedIndex(0));
    }
  }
  return (
    <HomeContainer>
      <AppBar
        onPress={() => {
          navigationRef.goBack();
        }}
      />
      {musicList?.length > 0 && (
        <Player
          playNext={() => {
            playNextSong(musicIndex);
          }}
          playPrevious={playPrevSong}
        />
      )}
      <MusicList
        musicList={shuffleList}
        onPressIcon={onPressIcon}
        onPressPlay={onPressIcon}
      />
    </HomeContainer>
  );
}

export default SongPlayer;
