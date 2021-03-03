import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const NoData = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/pikachu.png')} />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default NoData;
