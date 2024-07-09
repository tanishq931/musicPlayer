import {Text, TouchableOpacity, View} from 'react-native';
import styles from './AppBar.styles';

function AppBar({
  icon,
  onPress,
  title,
  titleStyle,
  secondIcon,
  onPressSecondIcon,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconButton}>
        {icon && <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>}
      </View>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
      <View style={styles.iconButton}>
        {secondIcon && (
          <TouchableOpacity onPress={onPressSecondIcon}>
            {secondIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default AppBar;
