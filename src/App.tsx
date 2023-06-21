import {ThemeProvider} from '@rneui/themed';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import RootScreen from '~/navigation';
import './i18n';
import createStore from './stores';
import {theme} from './theme';

console.disableYellowBox = true;
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export const {store, persistor} = createStore();

export const resetStores = () => store.dispatch({type: 'RESET_ACTION'});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <ThemeProvider theme={theme}>
            <RootScreen />
          </ThemeProvider>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
