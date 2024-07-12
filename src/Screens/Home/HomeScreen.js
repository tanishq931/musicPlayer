import {useContext, useEffect, useState} from 'react';
import {MusicContext} from '../../Context/musicContext';
import HomeContainer from '../../Containers/HomeContainer/HomeContainer';
import AppBar from '../../Components/AppBar/AppBar';
import styles from './HomeScreen.styles';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import MusicList from '../../Components/MusicList/MusicList';
import {useTrackPlayer} from '../../Hooks/useTrackPlayer';
import {
  setFavourites,
  setIsPlaying,
  setSelectedIndex,
  setSelectedMusic,
} from '../../Context/reducers';
import {navigationRef} from '../../Navigation.js/Navigation';
import {getLocalSongs} from '../../Hooks/getLocalSongs';
import StorageService from '../../Service/StorageService';
import {FAVOURITES_LIST} from '../../Constants/constants';
import SearchIcon from '../../../public/images/SearchIcon';
import {addListToPlayer} from '../../Hooks/addListToPlayer';
import {Capability, Event} from 'react-native-track-player';

function HomeScreen() {
  const [musicState, musicDispatch] = useContext(MusicContext);
  const [activeTab, setActiveTab] = useState(0);
  const [prevTab, setPrevTab] = useState(0);
  const {player, addSong} = useTrackPlayer();
  const {loading} = getLocalSongs();
  const musicList =
    activeTab === 0 ? musicState?.musicList : musicState?.favouritesList;

  const tabs = [
    {
      title: 'Local Songs',
      onPress: () => {
        setActiveTab(0);
      },
    },
    {
      title: 'Favourites',
      onPress: () => {
        setActiveTab(1);
      },
    },
  ];

  const onPressIcon = async (val, index) => {
    if (musicState?.selectedMusic?.title !== val?.title) {
      checkQueue(index);
      await musicDispatch(setSelectedIndex(index));
      await musicDispatch(setSelectedMusic(val));
      await musicDispatch(setIsPlaying(true));
    } else {
      if (musicState?.isPlaying) {
        musicDispatch(setIsPlaying(false));
      } else {
        musicDispatch(setIsPlaying(true));
      }
    }
  };

  const onPressPlay = async (val, index) => {
    if (
      musicState?.selectedMusic?.title !== val?.title ||
      !musicState?.isPlaying
    ) {
      onPressIcon(val, index);
    }
    navigationRef.navigate('SONG_PLAYER', {musicList});
  };

  async function checkQueue(index) {
    if ((await player.getQueue()).length > 0 && prevTab === activeTab) {
      player.skip(index);
    } else {
      addListToPlayer(musicList);
      await player.skip(index);
    }
  }
  useEffect(() => {
    getFavourites();
  }, []);

  async function getFavourites() {
    try {
      let res = await StorageService.getData(FAVOURITES_LIST);
      if (res) {
        musicDispatch(setFavourites(res));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (musicState?.selectedMusic) {
      let selectedIndex;
      musicList.filter((val, index) => {
        if (val?.title === musicState?.selectedMusic?.title) {
          selectedIndex = index;
        }
      });
      if (selectedIndex) {
        musicDispatch(setSelectedIndex(selectedIndex));
      }
    }
  }, [activeTab]);

  useEffect(() => {
    const trackChangeSubscription = player.addEventListener(
      Event.PlaybackActiveTrackChanged,
      async data => {
        const index =
          data?.index >= musicList?.length
            ? data?.index - musicList.length
            : data?.index;
        musicDispatch(setSelectedIndex(index));
        musicDispatch(setSelectedMusic(musicList[index]));
      },
    );
    const queueEndedSubscription = player.addEventListener(
      Event.PlaybackQueueEnded,
      async data => {
        musicDispatch(setSelectedIndex(0));
        musicDispatch(setSelectedMusic(musicList[0]));
        player.skip(0);
      },
    );
    return () => {
      trackChangeSubscription.remove();
      queueEndedSubscription.remove();
    };
  }, [musicState]);

  useEffect(() => {
    if (musicState?.selectedIndex >= 0) {
      setTrackOptions(musicState?.selectedIndex);
    }
  }, [musicState?.selectedIndex]);

  async function setTrackOptions(index) {
    await player.updateOptions({
      stopWithApp: true,
      capabilities: getCapability(index),
      compactCapabilities: getCapability(index),
    });
  }

  function getCapability(index) {
    let list = [];
    list.push(Capability.Play);
    list.push(Capability.Pause);
    list.push(Capability.Stop);
    if (index < musicList.length - 1) {
      list.push(Capability.SkipToNext);
    }
    if (index > 0) {
      list.push(Capability.SkipToPrevious);
    }
    return list;
  }

  return (
    <HomeContainer>
      <AppBar
        title="Sangeet Yantra"
        titleStyle={styles.title}
        secondIcon={<SearchIcon />}
        onPressSecondIcon={() => {
          navigationRef.navigate('SEARCH');
        }}
      />
      <View style={styles.tabBar}>
        {tabs.map((val, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.tab(activeTab === index)}
              onPress={val.onPress}>
              <Text style={styles.tabTitle}>{val.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {musicList?.length === 0 ? (
        <View style={styles.noDataContainer}>
          {loading && activeTab === 0 ? (
            <ActivityIndicator color="cornflowerblue" size={50} />
          ) : (
            <>
              <Text style={styles.noDataText}>No songs here!</Text>
              <Text style={styles.noDataText}>Try by adding Some</Text>
            </>
          )}
        </View>
      ) : (
        <MusicList
          musicList={musicList}
          onPressPlay={onPressPlay}
          onPressIcon={onPressIcon}
        />
      )}
    </HomeContainer>
  );
}

export default HomeScreen;
