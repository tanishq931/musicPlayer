import {Text, TouchableOpacity, View} from 'react-native';
import styles from './AppBar.styles';
import BackIcon from '../../../public/images/BackIcon';

function AppBar({onPress, title, titleStyle}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconButton}>
        {onPress && (
          <TouchableOpacity onPress={onPress}>
            <BackIcon color="white" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
    </View>
  );
}

export default AppBar;
