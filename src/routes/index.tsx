import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../screens/Main';

const Stack = createStackNavigator();
export const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
