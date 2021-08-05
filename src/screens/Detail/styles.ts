import styled from 'styled-components/native';
import {theme} from '@src/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.backgroundColor};
  padding: ${theme.metrics.screenHorizontalPadding + 'px'};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${theme.metrics.bigSpacing + 'px'};
`;

export const ButtonBox = styled.View`
  align-items: center;
  margin-bottom: ${theme.metrics.baseSpacing + 'px'};
`;
