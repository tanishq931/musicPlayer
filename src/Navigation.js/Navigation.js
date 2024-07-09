import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/Home/HomeScreen';
import SongPlayer from '../Screens/SongPlayer/SongPlayer';
import Search from '../Screens/Search/Search';

const Stack = createStackNavigator();
export const navigationRef = createNavigationContainerRef();

function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="HOME_SCREEN"
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        <Stack.Screen name="HOME_SCREEN" component={HomeScreen} />
        <Stack.Screen name="SONG_PLAYER" component={SongPlayer} />
        <Stack.Screen name="SEARCH" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
