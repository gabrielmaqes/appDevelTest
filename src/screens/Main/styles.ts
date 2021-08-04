import styled from 'styled-components/native';
import {theme} from '../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.backgroundColor};
  padding: ${theme.metrics.screenHorizontalPadding + 'px'};
`;

export const HeaderBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
