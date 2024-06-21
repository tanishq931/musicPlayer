import {StyleSheet} from 'react-native';
import Colors from '../../Theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: Colors.BLACK,
    paddingTop: 20,
  },
  topContainer: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    paddingTop:10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  descContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    color: Colors.BLACK,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  writers: {
    fontSize: 12,
    fontWeight: 'light',
    color: Colors.BLACK,
    textAlign: 'center',
  },
  likeRow: {
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  listContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});

export default styles;
