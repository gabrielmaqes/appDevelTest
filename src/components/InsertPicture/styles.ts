import styled from 'styled-components/native';
import {theme} from '@src/styles';

export const Image = styled.Image`
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secondaryPurple};
  width: 128px;
  height: 128px;
  border-radius: 8px;
`;

export const Container = styled.View`
  align-items: center;
  margin: ${theme.metrics.baseSpacing + 'px'} 0;
`;
export const ProfileBox = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
`;
export const PictureButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primaryPurple};
  width: 32px;
  height: 32px;
  border-radius: ${theme.metrics.baseRadius + 'px'};
  z-index: 2;
  position: absolute;
  bottom: -10px;
  right: -10px;
`;
