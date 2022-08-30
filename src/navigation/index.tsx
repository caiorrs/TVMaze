import * as React from 'react';
import * as Screens from '../screens';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import {RootStackParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {...DefaultTheme.colors},
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Screens.Home} name="Home" />
        <Stack.Screen component={Screens.Details} name="Details" />
        <Stack.Screen component={Screens.Episode} name="Episode" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
