import {StyleSheet} from 'react-native';
import Colors from '../../Theme/Colors';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-ExtraBold',
  },
  tabBar: {
    flexDirection: 'row',
    height: 60,
    marginTop: 20,
  },
  tab: active => ({
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: active ? Colors.WHITE : Colors.GREY,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:active?'#fdc5f5':'transparent'
    backgroundColor: active ? '#d90429' : 'transparent',
  }),
  tabTitle: {
    color: Colors.WHITE,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: 14,
    color: Colors.WHITE,
    fontFamily: 'Poppins-Light',
  },
});

export default styles;
