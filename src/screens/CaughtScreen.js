import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PoxedexCard from '../components/PokedexCard';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as caugthActions from '../redux/actions/caughtActions';
import NoData from '../components/NoData';
import I18n from '../lang/_i18n';

const CaughtScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => props.navigation.navigate('Favorites')}
          icon="heart"
        />
      ),
    });
  });

  const Component = (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={props.capturedPokemons}
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
  if (props.capturedPokemons.length > 0) {
    return Component;
  } else {
    return <NoData text={I18n.t('noCaptured')} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(CaughtScreen);
