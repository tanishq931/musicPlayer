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
    marginLeft: -45,
    marginTop: -45,
    height: 90,
    width: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: Colors.WHITE,
    backgroundColor: Colors.WHITE,
  },
  cover: {
    height: '100%',
    width: '100%',
    borderRadius: 45,
  },
});

export default styles;
