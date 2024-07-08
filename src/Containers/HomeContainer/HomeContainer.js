import {BlurView} from '@react-native-community/blur';
import React, {useContext} from 'react';
import {ImageBackground, View} from 'react-native';
import styles from './HomeContainer.styles';
import {MusicContext} from '../../Context/musicContext';

function HomeContainer({children}) {
  const [musicState] = useContext(MusicContext);
  const Background = musicState?.selectedMusic?.cover
    ? {uri: musicState?.selectedMusic?.cover}
    : require('../../../public/images/night2.jpg');

  return (
    <ImageBackground source={Background} style={styles.imageBackground}>
      <View style={styles.container}>
        <BlurView style={styles.absolute} blurType="medium" blurAmount={10} />
        {children}
      </View>
    </ImageBackground>
  );
}

export default HomeContainer;
