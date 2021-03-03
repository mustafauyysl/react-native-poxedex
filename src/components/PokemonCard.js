import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import urls from '../constants/urls';
import colors from '../constants/colors';

const PokemonCard = (props) => {
  return (
    <TouchableOpacity
      onPress={props.goDetailScreen}
      style={[styles.container, {backgroundColor: colors.primaryColor}]}>
      <Text style={styles.name} numberOfLines={1}>
        {props.pokemon.name}
        {props.color}
      </Text>
      <Image
        style={styles.img}
        source={{
          uri: urls.POKEMON_IMAGE_URL + props.pokemon.name + '.png',
        }}
      />
      <Image source={require('../assets/logo.png')} style={styles.bgImg} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
  },
  name: {
    fontSize: 24,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: '#fff',
    width: '60%',
  },
  img: {
    width: 120,
    height: 160,
    marginTop: -50,
  },
  bgImg: {
    position: 'absolute',
    right: 0,
    width: 120,
    height: 120,
    zIndex: -1,
    opacity: 0.3,
  },
});

export default PokemonCard;
