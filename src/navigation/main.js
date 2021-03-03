import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import CaughtScreen from '../screens/CaughtScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import colors from '../constants/colors';

import {connect} from 'react-redux';

const MainStack = createStackNavigator();

const MainNavigator = (props) => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              display: 'none',
            },
            cardStyle: {
              backgroundColor:
                props.theme === 'light' ? '#fff' : colors.darkTheme,
            },
          }}></MainStack.Screen>
        <MainStack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerTransparent: true,
            headerBackTitleVisible: false,
          }}></MainStack.Screen>
        <MainStack.Screen
          name="Captured"
          component={CaughtScreen}
          options={{
            headerStyle: {
              backgroundColor: colors.primaryColor,
            },
            headerTintColor:
              props.theme === 'light' ? '#fff' : colors.darkTheme,
            headerBackTitleVisible: false,
            cardStyle: {
              backgroundColor:
                props.theme === 'light' ? '#fff' : colors.darkTheme,
            },
          }}></MainStack.Screen>
        <MainStack.Screen
          name="Favorites"
          component={FavoriteScreen}
          options={{
            headerStyle: {
              backgroundColor: colors.primaryColor,
            },
            headerTintColor:
              props.theme === 'light' ? '#fff' : colors.darkTheme,
            headerBackTitleVisible: false,
            cardStyle: {
              backgroundColor:
                props.theme === 'light' ? '#fff' : colors.darkTheme,
            },
          }}></MainStack.Screen>
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.changeThemeReducer,
  };
};

export default connect(mapStateToProps)(MainNavigator);
