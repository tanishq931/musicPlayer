import {StyleSheet} from 'react-native';
import Colors from '../../Theme/Colors';

const styles = StyleSheet.create({
  cdContainer: {
    position: 'relative',
  },
  musicImg: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -35,
    marginTop: -35,
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: Colors.WHITE,
  },
});

export default styles;
