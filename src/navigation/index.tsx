import * as React from 'react';
import * as Screens from '../screens';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Screens.Home} name="Home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;