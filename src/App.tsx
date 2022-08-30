import Navigator from './navigation';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ThemeProvider from './contexts/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
