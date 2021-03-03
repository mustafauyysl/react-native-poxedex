import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Tag from './Tag';
import Button from './Button';
import colors from '../constants/colors';

const PoxedexCard = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: props.data.pokemonImg}} />
      <View style={styles.body}>
        <Text style={styles.name}>{props.data.name}</Text>
        <FlatList
          keyExtractor={(key) => key.item}
          style={styles.tagList}
          horizontal
          data={props.data.pokemonTypes}
          renderItem={(data) => (
            <Tag title={data.item} bgColor={colors.POKEMON_COLORS[data.item]} />
          )}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button onPress={props.releaseClicked} icon="close" />
        <Button
          onPress={props.favoriteClicked}
          icon={props.data.favourite ? 'heart' : 'heart-outline'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  img: {
    width: 120,
    height: 150,
  },
  name: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  body: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagList: {
    width: 150,
  },
});

export default PoxedexCard;
