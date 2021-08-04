import {theme} from '../../styles';
import React from 'react';
import {TextComponent} from '../TextComponent';
import {Container, Content, TopLine} from './styles';
import moment from 'moment';
import {Image} from 'react-native';
import {serverURL} from '../../services/api';

interface UserCardProps {
  name: string;
  birthDate: Date;
  photo_uri: string;
  onPress: () => void;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  birthDate,
  photo_uri,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <Image
        style={{
          width: 64,
          height: 64,
          borderRadius: theme.metrics.baseRadius,
        }}
        resizeMode={'cover'}
        width={64}
        height={64}
        source={{
          uri: `${serverURL}/${photo_uri}`,
        }}
      />
      <Content>
        <TopLine>
          <TextComponent fontFamily="Nunito-Bold">{name}</TextComponent>
          <TextComponent
            color={theme.colors.primaryPurple}
            fontFamily="Nunito-Bold">
            Ver mais
          </TextComponent>
        </TopLine>
        <TextComponent
          color={theme.colors.secondaryPurple}
          fontFamily="Nunito-Bold">
          {moment(birthDate).format('DD/MM/yyyy')}
        </TextComponent>
      </Content>
    </Container>
  );
};

export default UserCard;
