import {Text, View} from 'react-native';
import styles from './HomeScreen.styles';
import {useEffect, useRef, useState} from 'react';
import DiskPlayer from '../../Components/DiskPlayer/DiskPlayer';
import DownloadIcon from '../../../public/images/download';
import LikeIcon from '../../../public/images/likeIcon';
import DislikeIcon from '../../../public/images/dislikeIcon';
import ButtonBox from '../../Components/ButtonBox/ButtonBox';
import LocalSongs from '../../Components/LocalSongs/LocalSongs';

function HomeScreen() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePress = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <DiskPlayer isPlaying={isPlaying} />
        <View style={styles.descContainer}>
          <Text style={styles.title}>On My Way</Text>
          <Text style={styles.writers}>
            Alan Walker, Sabrina Carpenter & Farruko
          </Text>
        </View>
        <View style={styles.likeRow}>
          <ButtonBox icon={<LikeIcon />} title="Like" onPress={handlePress} />
          <ButtonBox
            icon={<DislikeIcon />}
            title="Dislike"
            onPress={() => {}}
          />
          <ButtonBox
            icon={<DownloadIcon />}
            title="Download"
            onPress={() => {}}
          />
        </View>
      </View>
      <LocalSongs />
    </View>
  );
}

export default HomeScreen;
