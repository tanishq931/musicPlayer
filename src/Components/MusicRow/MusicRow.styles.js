import {StyleSheet} from 'react-native';
import Colors from '../../Theme/Colors';

const styles = StyleSheet.create({
  musicRow: {
    padding: 15,
    paddingLeft: 20,
    gap:8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicNameContainer: {
    flex: 1,
  },
  musicName: {
    fontSize: 14,
    color: Colors.WHITE,
  },
});
export default styles;
