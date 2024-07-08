import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import styles from './FavouritesList.styles';
import AppBar from '../../Components/AppBar/AppBar';
import HomeContainer from '../../Containers/HomeContainer/HomeContainer';
import {navigationRef} from '../../Navigation.js/Navigation';
import {MusicContext} from '../../Context/musicContext';
import MusicList from '../../Components/MusicList/MusicList';
function FavouritesList() {
  const [musicState] = useContext(MusicContext);
  const musicList = musicState?.favouritesList;
  return (
    <HomeContainer>
      <AppBar
        onPress={() => {
          navigationRef.navigate('HOME_SCREEN');
        }}
        title="Favourite Songs"
      />

      <View style={styles.container}>
        {musicList?.length > 0 ? (
          <MusicList
            musicList={musicList}
            onPressPlay={() => {
              navigationRef.navigate('HOME_SCREEN');
            }}
          />
        ) : (
          <View style={styles.noSong}>
            <Text style={styles.noSongText}>No songs in Favourites</Text>
          </View>
        )}
      </View>
    </HomeContainer>
  );
}

export default FavouritesList;
