import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <Icon size={20} name="search" style={styles.icon} />
      <TextInput
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E6E6E6',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    flex: 0.1,
  },
  input: {
    flex: 0.8,
  },
});

export default SearchBar;
