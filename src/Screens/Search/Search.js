import {Text, View} from 'react-native';
import styles from './Search.styles';
import HomeContainer from '../../Containers/HomeContainer/HomeContainer';
import SearchBar from '../../Components/SearchBar/SearchBar';
import {useContext, useState} from 'react';
import MusicList from '../../Components/MusicList/MusicList';
import {MusicContext} from '../../Context/musicContext';
import {
  setIsPlaying,
  setSelectedIndex,
  setSelectedMusic,
} from '../../Context/reducers';
import {useTrackPlayer} from '../../Hooks/useTrackPlayer';
import {navigationRef} from '../../Navigation.js/Navigation';

function Search() {
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [musicState, musicDispatch] = useContext(MusicContext);
  const {addSong} = useTrackPlayer();
  const onChangeText = value => {
    if (!value.trim()) {
      setSearchData([]);
    } else {
      const data = musicState?.musicList.filter(val => {
        return val.title.toLowerCase().includes(value.toLowerCase());
      });
      setSearchData(data);
    }
    setSearchText(value);
  };

  const onPressIcon = async val => {
    let selectedIndex = 0;
    musicState?.musicList.filter((value, i) => {
      if (value.title === val.title) {
        index = i;
      }
    });
    await addSong(val);
    await musicDispatch(setSelectedMusic(val));
    await musicDispatch(setIsPlaying(true));
    await musicDispatch(setSelectedIndex(selectedIndex));
    navigationRef.navigate('SONG_PLAYER', {musicList: musicState?.musicList});
  };
  return (
    <HomeContainer>
      <View style={styles.container}>
        <SearchBar searchText={searchText} onChange={onChangeText} />
        {searchText && searchData.length > 0 ? (
          <MusicList
            musicList={searchData}
            onPressIcon={onPressIcon}
            onPressPlay={onPressIcon}
          />
        ) : (
          <View style={styles.noResult}>
            <Text style={styles.noResText}>
              {searchText.length > 0
                ? 'No results found'
                : 'Enter Some Characters to Start'}
            </Text>
          </View>
        )}
      </View>
    </HomeContainer>
  );
}

export default Search;
