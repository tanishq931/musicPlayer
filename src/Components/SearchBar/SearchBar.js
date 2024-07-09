import {TextInput, TouchableOpacity, View} from 'react-native';
import styles from './SearchBar.styles';
import BackIcon from '../../../public/images/BackIcon';
import {navigationRef} from '../../Navigation.js/Navigation';

function SearchBar({searchText, onChange}) {
  return (
    <View style={styles.searchBar}>
      <TouchableOpacity
        onPress={() => {
          navigationRef.goBack();
        }}>
        <BackIcon color="white" />
      </TouchableOpacity>
      <View style={styles.searchInput}>
        <TextInput
          value={searchText}
          onChangeText={onChange}
          style={styles.input}
        />
      </View>
    </View>
  );
}

export default SearchBar;
