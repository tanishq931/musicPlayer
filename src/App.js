import {StatusBar} from 'react-native';
import Colors from './Theme/Colors';
import {MusicProvider} from './Context/musicContext';
import TrackPlayer from 'react-native-track-player';
import {useEffect} from 'react';
import 'react-native-gesture-handler';
import Navigation from './Navigation.js/Navigation';

function App() {
  useEffect(() => {
    const setupPlayer = async () => {
      await TrackPlayer.setupPlayer();
    };
    setupPlayer();
    return () => {
      TrackPlayer.reset();
    };
  }, []);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.BLACK} />
      <MusicProvider>
        <Navigation />
      </MusicProvider>
    </>
  );
}

export default App;
