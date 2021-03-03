import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import * as pokemonActions from '../redux/actions/pokemonActions';
import * as themeActions from '../redux/actions/themeActions';
import colors from '../constants/colors';
import I18n from '../lang/_i18n';

const HomeScreen = (props) => {
  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    props.actions.getPokemons();
  }, []);

  const renderItem = (data) => {
    const url = data.item.url;
    const pokemonId = url.split('/')[url.split('/').length - 2];
    const pokemonName = data.item.name;
    return (
      <PokemonCard
        goDetailScreen={() => goDetailScreen(pokemonId, pokemonName)}
        pokemon={data.item}
      />
    );
  };
  const goDetailScreen = (id, name) => {
    props.actions.selectPokemon(id);
    props.navigation.navigate('Detail', {id, name});
  };

  const renderPokemonList = () => {
    let text = pokemonName.toLowerCase();
    const newArray = [];
    props.pokemons.map((x) => {
      if (x.name.toLowerCase().match(text)) {
        newArray.push(x);
      }
    });
    return newArray;
  };

  const changeTheme = () => {
    props.actions.changeTheme(props.theme === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={styles.container}>
      <Image
        style={[
          styles.headerImage,
          {opacity: props.theme === 'light' ? 1 : 0.1},
        ]}
        source={require('../assets/logo.png')}
      />
      <View style={styles.headerTitleContainer}>
        <Text
          style={[
            styles.headerTitle,
            {color: props.theme === 'light' ? colors.darkTheme : '#fff'},
          ]}>
          Pokédex
        </Text>
        <Button
          onPress={() => changeTheme()}
          icon={props.theme === 'light' ? 'moon-outline' : 'moon'}
        />
      </View>
      <Text style={styles.headerDescription}>{I18n.t('homeDescription')}</Text>
      <SearchBar
        placeholder={I18n.t('searchBarPlaceholder')}
        onChangeText={(value) => setPokemonName(value)}
      />
      <FlatList
        keyExtractor={(item) => item.url}
        showsVerticalScrollIndicator={false}
        data={renderPokemonList()}
        renderItem={(data) => renderItem(data)}
      />

      <Button
        img={require('../assets/logo.png')}
        style={styles.captureBtn}
        bgColor="#221E1F"
        onPress={() => props.navigation.navigate('Captured')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  headerImage: {
    width: 500,
    height: 500,
    alignSelf: 'center',
    position: 'absolute',
    top: -200,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 120,
  },
  headerDescription: {
    marginTop: 10,
    color: 'gray',
    fontSize: 18,
  },
  captureBtn: {
    position: 'absolute',
    bottom: 20,
    borderRadius: 50,
    width: 80,
    height: 80,
  },
});

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemonsListReducer,
    capturedPokemons: state.caughtReducer,
    theme: state.changeThemeReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getPokemons: bindActionCreators(pokemonActions.getPokemons, dispatch),
      selectPokemon: bindActionCreators(pokemonActions.selectPokemon, dispatch),
      changeTheme: bindActionCreators(themeActions.changeTheme, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
