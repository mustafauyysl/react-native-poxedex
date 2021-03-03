import React, {useEffect, useState} from 'react';
import MainNavigator from './navigation/main';
import {Provider} from 'react-redux';
import configureStore from './redux/reducers/configureStore';
import NetInfo from '@react-native-community/netinfo';
import NoData from './components/NoData';
import I18n from './lang/_i18n';

const store = configureStore();

const App = () => {
  const [isİnternet, setInternet] = useState(true);
  useEffect(() => {
    NetInfo.addEventListener((state) => {
      setInternet(state.isConnected);
    });
  });
  if (isİnternet) {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  } else {
    return <NoData text={I18n.t('noInternet')} />;
  }
};

export default App;
