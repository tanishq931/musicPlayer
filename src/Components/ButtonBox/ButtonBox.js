import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import styles from './ButtonBox.styles';

function ButtonBox({icon, title, onPress = () => {}}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonBox;
