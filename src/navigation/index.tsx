import * as React from 'react';
import * as Screens from '../screens';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import {RootStackParamList} from './types';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '../contexts/ThemeContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator: React.FC = () => {
  const {theme} = useTheme();

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.background}
        translucent
      />
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {...DefaultTheme.colors, background: theme.colors.background},
        }}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen component={Screens.Home} name="Home" />
          <Stack.Screen component={Screens.Details} name="Details" />
          <Stack.Screen component={Screens.Episode} name="Episode" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigator;
