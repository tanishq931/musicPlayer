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

function HomeScreen() {
  const [musicState, musicDispatch] = useContext(MusicContext);
  const [activeTab, setActiveTab] = useState(0);
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
      addSong(val);
      await musicDispatch(setSelectedIndex(index));
      await musicDispatch(setSelectedMusic(val));
      await musicDispatch(setIsPlaying(true));
    } else {
      if (musicState?.isPlaying) {
        player.pause();
        musicDispatch(setIsPlaying(false));
      } else {
        player.play();
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

  return (
    <HomeContainer>
      <AppBar title="Sangeet Yantra" titleStyle={styles.title} />
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
