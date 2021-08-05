import styled from 'styled-components/native';
import {theme} from '@src/styles';

export const Container = styled.TouchableOpacity`
  height: 88px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.colors.white};
  padding: ${theme.metrics.baseSpacing + 'px'};
  margin: ${theme.metrics.baseSpacing + 'px'} 0;
  border-radius: ${theme.metrics.baseRadius + 'px'};
`;

export const AvatarBox = styled.View`
  height: 64px;
  width: 64px;
  background-color: aliceblue;
  border-radius: ${theme.metrics.baseRadius + 'px'};
`;

export const Content = styled.View`
  flex: 1;
  padding-left: ${theme.metrics.baseSpacing + 'px'};
  justify-content: space-evenly;
`;

export const TopLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
