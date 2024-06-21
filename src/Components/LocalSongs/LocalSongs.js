import {PermissionsAndroid, Platform, Text, View} from 'react-native';
import styles from './LocalSongs.list';
import {useEffect, useState} from 'react';
import TrackPlayer from 'react-native-track-player';
import RNFS from 'react-native-fs';
import PlayIcon from '../../../public/images/playIcon';
import PauseIcon from '../../../public/images/pauseIcon';

function LocalSongs() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    // getLocalSongs();
  }, []);

  const requestStoragePermission = async () => {
    try {
      getLocalSongs();
    } catch (err) {
      console.warn(err);
    }
  };

  const getLocalSongs = () => {
    const musicDirectory = RNFS.ExternalStorageDirectoryPath;

    // Function to recursively scan directories
    const scanDirectory = async dirPath => {
      try {
        const files = await RNFS.readDir(dirPath);
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (file.isDirectory()) {
            await scanDirectory(file.path); // Recursive call for subdirectories
          } else if (file.isFile() && file.name.endsWith('.mp3')) {
            setSongs(prevSongs => [...prevSongs, file]); // Add .mp3 file to songs state
          }
        }
      } catch (err) {
        console.log('Error scanning directory:', err.message);
      }
    };

    scanDirectory(musicDirectory);
  };
  return (
    <View style={styles.container}>
      <View style={styles.musicRow}>
        <Text style={styles.musicName}>On My Way</Text>
        <PlayIcon />
      </View>
    </View>
  );
}

export default LocalSongs;
