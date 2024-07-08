import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import styles from './ButtonBox.styles';

function ButtonBox({icon, title, onPress = () => {}, style}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {icon}
      {/* <Text style={styles.title}>{title}</Text> */}
    </TouchableOpacity>
  );
}

export default ButtonBox;
