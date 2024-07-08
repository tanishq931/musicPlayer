import {useContext, useEffect, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {
  SortSongFields,
  SortSongOrder,
  getAll,
} from 'react-native-get-music-files';
import {MusicContext} from '../Context/musicContext';
import {setMusicList} from '../Context/reducers';

export function getLocalSongs() {
  const [loading, setIsLoading] = useState(false);
  const [, musicDispatch] = useContext(MusicContext);
  useEffect(() => {
    setIsLoading(true);
    const requestStoragePermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
            {
              title: 'Read External Storage Permission',
              message:
                'This app needs access to your external storage to read music files',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            fetchSongs();
          } else {
          }
        } catch (err) {}
      } else {
        return fetchSongs();
      }
    };
    requestStoragePermission();
  }, []);

  async function fetchSongs() {
    try {
      const songsFetched = await getAll({
        limit: 100,
        blured: false, // Get the blurred image for the album
        artist: true, // Get the artist name
        duration: true, // Get the duration of the track in seconds
        genre: true, // Get the genre of the track
        title: true, // Get the title of the track
        cover: true,
        coverQuality: 50,
        minSongDuration: 30000,
        sortBy: SortSongFields.TITLE,
        sortOrder: SortSongOrder.DESC,
      });
      const filterSongs = songsFetched.filter(val => {
        return !val.title.startsWith('AUD');
      });
      musicDispatch(setMusicList(filterSongs));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }
  return {loading};
}
