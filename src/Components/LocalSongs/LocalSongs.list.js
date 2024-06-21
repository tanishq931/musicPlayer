import {StyleSheet} from 'react-native';
import Colors from '../../Theme/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  musicRow: {
    paddingVertical: 10,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
  },
  musicName: {
    fontSize:14,
    fontColor:Colors.PURPLE
  },
});

export default styles;
