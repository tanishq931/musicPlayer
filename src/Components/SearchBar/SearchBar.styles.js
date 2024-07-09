import {StyleSheet} from 'react-native';
import Colors from '../../Theme/Colors';

const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    gap: 8,
    marginTop: 20,
    borderWidth: 2,
    borderColor: Colors.WHITE,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
  },
  input: {
    color:Colors.WHITE,
    fontSize:16,
    fontFamily:'Poppins-Medium',
    paddingTop:10,
  },
});

export default styles;
