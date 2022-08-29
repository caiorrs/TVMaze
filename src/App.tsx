import Navigator from './navigation';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
};

export default App;
