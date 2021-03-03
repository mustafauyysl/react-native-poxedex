import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import colors from '../constants/colors';
import urls from '../constants/urls';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as caugthActions from '../redux/actions/caughtActions';
import I18n from '../lang/_i18n';

const DetailScreen = (props) => {
  const {id, name} = props.route.params;
  const {selectedPokemon, actions, navigation} = props;
  const pokemonTypes = selectedPokemon.types;
  const mainColor = colors.POKEMON_COLORS[selectedPokemon.color];
  const pokemonImg = urls.POKEMON_IMAGE_URL + name + '.png';
  const isCaught = props.capturedPokemons.find((pokemon) => pokemon.id === id)
    ? true
    : false;

  useEffect(() => {
    navigation.setOptions({
      cardStyle: {backgroundColor: mainColor},
      title: name.charAt(0).toUpperCase() + name.slice(1),
      headerTintColor: props.theme === 'light' ? '#fff' : colors.darkTheme,
    });
  });

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={{
            uri: pokemonImg,
          }}
        />
      </View>
      <View
        style={[
          styles.body,
          props.theme === 'light'
            ? {backgroundColor: '#fff'}
            : {backgroundColor: colors.darkTheme},
        ]}>
        <ScrollView>
          <Text style={[styles.title, {color: mainColor}]}>
            {I18n.t('descriptionTitle')}
          </Text>
          <Text
            style={[
              styles.description,
              props.theme === 'dark' ? {color: '#fff'} : null,
            ]}>
            {selectedPokemon.description}
          </Text>
          <Text style={[styles.title, {color: mainColor}]}>
            {I18n.t('statusTitle')}
          </Text>
          <FlatList
            keyExtractor={(item) => item.name}
            scrollEnabled={false}
            data={selectedPokemon.features}
            renderItem={(data) => (
              <ProgressBar
                title={data.item.name}
                percent={data.item.percent}
                color={mainColor}
                titleColor={props.theme === 'light' ? colors.darkTheme : '#fff'}
              />
            )}
          />
        </ScrollView>
      </View>
      <Button
        onPress={() =>
          isCaught
            ? actions.releasePokemon({
                id,
                name,
                pokemonImg,
                pokemonTypes,
                favourite: false,
              })
            : actions.caughtPokemon({
                id,
                name,
                pokemonImg,
                pokemonTypes,
                favourite: false,
              })
        }
        style={styles.button}
        bgColor={mainColor}
        title={isCaught ? I18n.t('releaseBtnTitle') : I18n.t('caughtBtnTitle')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  body: {
    flex: 0.8,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
  },
  title: {
    alignSelf: 'center',
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  img: {
    width: 250,
    height: 250,
  },
  description: {
    fontSize: 16,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    width: '90%',
    marginHorizontal: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    selectedPokemon: state.selectPokemonReducer,
    capturedPokemons: state.caughtReducer,
    theme: state.changeThemeReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      caughtPokemon: bindActionCreators(caugthActions.caughtPokemon, dispatch),
      releasePokemon: bindActionCreators(
        caugthActions.releasePokemon,
        dispatch,
      ),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
