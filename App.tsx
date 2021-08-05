import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {Routes} from './src/routes';
import {theme} from './src/styles/index';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={theme.colors.backgroundColor}
        barStyle="dark-content"
        animated
      />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
