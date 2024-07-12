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
import {Capability, Event} from 'react-native-track-player';
import {removeElement, useShuffle} from '../../Hooks/useShuffle';
import BackIcon from '../../../public/images/BackIcon';
import Colors from '../../Theme/Colors';
import {addListToPlayer} from '../../Hooks/addListToPlayer';

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

  const playNextSong = musicIndex => {
    let nextIndex = musicIndex === musicList?.length - 1 ? 0 : musicIndex + 1;
    playSong(nextIndex);
  };

  const playPrevSong = () => {
    let prevIndex = musicIndex === 0 ? musicList.length - 1 : musicIndex - 1;
    playSong(prevIndex);
  };

  const playSong = async index => {
    player.skip(index);
    await musicDispatch(setSelectedMusic(shuffleList[index]));
    await musicDispatch(setSelectedIndex(index));
    setMusicIndex(index);
  };
  useEffect(() => {
    shuffleSongs();
  }, [musicState?.shuffle]);

  async function shuffleSongs() {
    if (musicState?.shuffle) {
      await player.pause();
      const shuffledArr = useShuffle(shuffleList);
      setShuffleList(shuffledArr);
      addListToPlayer(shuffledArr);
      setMusicIndex(0);
      await musicDispatch(setSelectedIndex(0));
      player.play();
    }
  }

  return (
    <HomeContainer>
      <AppBar
        onPress={() => {
          navigationRef.goBack();
        }}
        icon={<BackIcon color={Colors.WHITE} />}
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
