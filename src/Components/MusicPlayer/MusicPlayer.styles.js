import {StyleSheet} from 'react-native';
import Colors from '../../Theme/Colors';

const styles = StyleSheet.create({
  topContainer: {
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  descContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    color: Colors.WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  writers: {
    fontSize: 12,
    fontWeight: 'light',
    color: Colors.WHITE,
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  trackPlayer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    marginHorizontal: 10,
    gap: 40,
  },
  playPosition: {
    paddingHorizontal: 10,
    position: 'relative',
  },
  durationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  positionLabel: {
    position: 'absolute',
    top: -15,
    width: 50,
  },
  positionLabelText: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.WHITE,
  },
  favourites: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 25,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
