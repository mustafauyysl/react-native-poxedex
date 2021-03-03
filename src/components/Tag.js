import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Tag = (props) => {
  return (
    <View
      style={[styles.container, {backgroundColor: props.bgColor}, props.style]}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 10,
    height: 40,
    marginLeft: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
});
export default Tag;
