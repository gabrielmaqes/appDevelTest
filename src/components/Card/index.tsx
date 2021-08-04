import {theme} from '../../styles';
import React from 'react';
import {TextComponent} from '../TextComponent';
import {AvatarBox, Container, Content, TopLine} from './styles';

interface UserCardProps {
  name: string;
  birthDate: string;
  onPress: () => void;
}

const UserCard: React.FC<UserCardProps> = ({name, birthDate, onPress}) => {
  return (
    <Container onPress={onPress}>
      <AvatarBox></AvatarBox>
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
          {birthDate}
        </TextComponent>
      </Content>
    </Container>
  );
};

export default UserCard;
