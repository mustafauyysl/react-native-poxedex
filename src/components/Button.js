import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, {backgroundColor: props.bgColor}, props.style]}>
      {props.title && (
        <Text style={[styles.title, {color: props.titleColor}]}>
          {props.title}
        </Text>
      )}
      {props.img && <Image style={styles.img} source={props.img} />}
      {props.icon && (
        <Icon name={props.icon} size={24} color={props.iconColor} />
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  img: {
    width: 50,
    height: 50,
  },
});
export default Button;
