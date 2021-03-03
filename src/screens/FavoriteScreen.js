import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import PoxedexCard from '../components/PokedexCard';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as caugthActions from '../redux/actions/caughtActions';
import NoData from '../components/NoData';
import I18n from '../lang/_i18n';

const FavoriteScreen = (props) => {
  const favoritesPokemon = props.capturedPokemons.filter(
    (pokemon) => pokemon.favourite !== false,
  );

  const Component = (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={favoritesPokemon}
        renderItem={(data) => (
          <PoxedexCard
            releaseClicked={() => props.actions.releasePokemon(data.item)}
            favoriteClicked={() =>
              props.actions.caughtPokemon({
                ...data.item,
                favourite: !data.item.favourite,
              })
            }
            data={data.item}
          />
        )}
      />
    </View>
  );

  if (favoritesPokemon.length > 0) {
    return Component;
  } else {
    return <NoData text={I18n.t('noFavorites')} />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
});

const mapStateToProps = (state) => {
  return {
    capturedPokemons: state.caughtReducer,
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

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreen);
