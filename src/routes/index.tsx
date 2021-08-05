import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '@src/screens/Main';
import NewUser from '@src/screens/NewUser';

type RootStackParamList = {
  Main: undefined;
  NewUser: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewUser"
        component={NewUser}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
