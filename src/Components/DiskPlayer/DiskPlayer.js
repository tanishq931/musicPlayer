import {Animated, Image, View} from 'react-native';
import CdIcon from '../../../public/images/cdIcon';
import styles from './DiskPlayer.styles';
import {useContext, useEffect, useRef} from 'react';
import {MusicContext} from '../../Context/musicContext';

function DiskPlayer() {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const rotateInterpolation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const [musicState] = useContext(MusicContext);
  const isPlaying = musicState?.isPlaying;
  const imgUrl = musicState?.selectedMusic?.cover;
  const defaultUrl = require('../../../public/images/background.jpg');

  useEffect(() => {
    if (isPlaying) {
      startRotation();
    } else {
      stopRotation();
    }
  }, [isPlaying]);

  const startRotation = () => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start();
  };

  const stopRotation = () => {
    rotateValue.stopAnimation();
    rotateValue.setValue(0);
  };

  const animatedStyle = {
    transform: [{rotate: rotateInterpolation}],
  };
  return (
    <View style={styles.cdContainer}>
      <Animated.View style={animatedStyle}>
        <CdIcon />
      </Animated.View>
      <View style={styles.musicImg}>
        <Image
          source={imgUrl ? {uri: imgUrl} : defaultUrl}
          style={styles.cover}
        />
      </View>
    </View>
  );
}

export default DiskPlayer;
