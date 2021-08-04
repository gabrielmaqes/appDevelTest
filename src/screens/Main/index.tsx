import React, {useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {Container, HeaderBox} from './styles';
import {Card, Input, Button} from '../../components';
import {TextComponent} from '../../components/TextComponent';
import {theme} from '../../styles';
import {useUserController} from '../../controllers/UsersController';
import {UserModel} from '@src/models/UserModel';

const Main: React.FC = () => {
  const {getUser, handleUser} = useUserController();
  const usersListData = getUser.usersList;

  const [value, setValue] = useState('');
  const [usersFiltered, setUsersFiltered] =
    useState<UserModel[]>(usersListData);

  const handleFilter = (filterValue: string) => {
    const filteredList = getUser.usersList.filter(user => {
      return user.name.includes(filterValue);
    });
    setUsersFiltered(filteredList);
    setValue(filterValue);
  };

  return (
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
        value={value}
        onChange={(e: string) => handleFilter(e)}
        iconName="search"
        iconSize={16}
        placeholder="Buscar usuário..."
      />

      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={getUser.loading}
            onRefresh={() => handleUser.getUsersList()}
          />
        }
        data={usersFiltered.length ? usersFiltered : getUser.usersList}
        renderItem={({item}) => (
          <Card
            onPress={() => {}}
            photo_uri={item.photo_uri}
            name={item.name}
            birthDate={item.birthDate}
          />
        )}
      />
    </Container>
  );
};

export default Main;
