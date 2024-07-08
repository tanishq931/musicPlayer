import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/Home/HomeScreen';
import FavouritesList from '../Screens/Favourites/FavouritesList';
import {View} from 'react-native';
import SongPlayer from '../Screens/SongPlayer/SongPlayer';

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
        {/* <Stack.Screen name="FAVOURITES_LIST" component={FavouritesList} /> */}
        <Stack.Screen name="SONG_PLAYER" component={SongPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
