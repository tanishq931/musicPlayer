import {StyleSheet} from 'react-native';
import Colors from '../../Theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noResult: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontFamily: 'Poppins-Light',
  },
});

export default styles;
