import {StyleSheet} from 'react-native';
import Colors from '../../Theme/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 12,
    width:'22%',
    backgroundColor: Colors.WHITE,
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    height:55
  },
  title: {
    fontSize: 12,
    color: Colors.BLACK,
  },
});

export default styles;
