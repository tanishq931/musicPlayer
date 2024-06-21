import HomeScreen from './Screens/Home/HomeScreen';
import {StatusBar} from 'react-native';
import Colors from './Theme/Colors';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.BACKGROUND} />
      <HomeScreen />
    </>
  );
}

export default App;
