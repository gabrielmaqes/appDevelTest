import React from 'react';
import {Image, Container, PictureButton, ProfileBox} from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {theme} from '@src/styles';

type InsertPictureProps = {
  photo_uri?: string;
  onInsertPic?: () => void;
};
const InsertPicture: React.FC<InsertPictureProps> = ({
  photo_uri,
  onInsertPic,
}) => {
  return (
    <Container>
      <ProfileBox>
        <Image
          source={{
            uri: photo_uri,
          }}
        />
      </ProfileBox>
      <PictureButton onPress={onInsertPic}>
        <FontAwesome5 name="camera" size={16} color={theme.colors.white} />
      </PictureButton>
    </Container>
  );
};

export default InsertPicture;
