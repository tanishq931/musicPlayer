import {StatusBar} from 'react-native';
import Colors from './Theme/Colors';
import {MusicProvider} from './Context/musicContext';
import TrackPlayer, {Capability} from 'react-native-track-player';
import {useEffect} from 'react';
import 'react-native-gesture-handler';
import Navigation from './Navigation.js/Navigation';

function App() {
  useEffect(() => {
    setupPlayer();
    return ()=>{
      TrackPlayer.reset();
    }
  }, []);

  async function setupPlayer() {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],
      });
    } catch (e) {
      console.log(e);
    }
  }

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
