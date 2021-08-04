import React from 'react';
import {View, Text} from 'react-native';

const Main: React.FC = () => {
  return (
    console.log('Hello, world!'),
    (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontFamily: 'Nunito-Bold', fontSize: 32}}>
          Hello, DevelCode!
        </Text>
      </View>
    )
  );
};

export default Main;
