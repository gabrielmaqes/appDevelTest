import React from 'react';
import {FlatList} from 'react-native';
import {Container, HeaderBox} from './styles';
import {Card, Input, Button} from '../../components';
import {TextComponent} from '../../components/TextComponent';
import {theme} from '../../styles';

const Main: React.FC = () => {
  return (
    console.log('Hello, world!'),
    (
      <Container>
        <HeaderBox>
          <TextComponent
            fontFamily="Nunito-Regular"
            fontSize={theme.fontSize.bigTitle}>
            Usuários
          </TextComponent>
          <Button onPress={() => {}}>Novo +</Button>
        </HeaderBox>
        <Input
          iconName="search"
          iconSize={16}
          placeholder="Buscar usuário..."
        />

        <FlatList
          data={[
            {name: 'Gabriel Aguiar', birthDate: '30/11/1999'},
            {name: 'Gabriel Aguiar', birthDate: '30/11/1999'},
            {name: 'Gabriel Aguiar', birthDate: '30/11/1999'},
            {name: 'Gabriel Aguiar', birthDate: '30/11/1999'},
            {name: 'Gabriel Aguiar', birthDate: '30/11/1999'},
            {name: 'Gabriel Aguiar', birthDate: '30/11/1999'},
            {name: 'Gabriel Aguiar', birthDate: '30/11/1999'},
            {name: 'Gabriel Aguiar', birthDate: '30/11/1999'},
          ]}
          renderItem={({item}) => (
            <Card
              onPress={() => {}}
              name={item.name}
              birthDate={item.birthDate}></Card>
          )}
        />
      </Container>
    )
  );
};

export default Main;
