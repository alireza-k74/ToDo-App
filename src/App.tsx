import {NativeBaseProvider} from 'native-base';
import React from 'react';
import RootScreen from '~/navigation';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Provider} from 'react-redux';
import createStore from './stores';

export const {store, persistor} = createStore();

export const resetStores = () => store.dispatch({type: 'RESET_ACTION'});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <RootScreen />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
