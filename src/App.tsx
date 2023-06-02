import {NativeBaseProvider} from 'native-base';
import React from 'react';
import RootScreen from '~/navigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <RootScreen />
    </NativeBaseProvider>
  );
};

export default App;
