import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ProgressBar = (props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: props.titleColor}]}>
        {props.title}
      </Text>
      <View style={[styles.bar, {borderColor: props.color}]}>
        <View
          style={[
            styles.inner,
            {width: props.percent + '%', backgroundColor: props.color},
          ]}
        />
      </View>
      <Text style={[styles.label, {color: props.titleColor}]}>
        {props.percent}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    flex: 0.3,
    textTransform: 'capitalize',
  },
  bar: {
    width: '100%',
    height: 10,
    padding: 3,
    borderWidth: 3,
    borderRadius: 30,
    justifyContent: 'center',
    flex: 0.6,
  },
  inner: {
    width: '100%',
    height: 5,
    borderRadius: 15,
  },
  label: {
    fontSize: 13,
    color: 'black',
    flex: 0.1,
    marginLeft: 10,
  },
});

export default ProgressBar;
