import {Text, TouchableOpacity, View} from 'react-native';
import styles from './MusicRow.styles';

function MusicRow({title, icon, onPress, customStyle, onPressIcon = () => {}}) {
  return (
    <TouchableOpacity style={[styles.musicRow, customStyle]} onPress={onPress}>
      <View style={styles.musicNameContainer}>
        <Text style={styles.musicName}>{title}</Text>
      </View>
      {icon && (
        <TouchableOpacity onPress={onPressIcon}>{icon}</TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

export default MusicRow;
