import React, {ReactNode} from 'react';
import {Container, Title, IconLeft, BoxRight} from './styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  title?: string;
};

const Header: React.FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <IconLeft onPress={navigation.goBack}>
        <FontAwesome5Icon name={'arrow-left'} size={24} />
      </IconLeft>
      <Title>{title}</Title>
      <BoxRight></BoxRight>
    </Container>
  );
};

export default Header;
