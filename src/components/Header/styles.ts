import styled from 'styled-components/native';
import {theme} from '@src/styles';

interface TitleProps {
  color?: string;
  fontWeight?: string | number;
  fontSize?: number;
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
export const IconLeft = styled.TouchableOpacity`
  flex: 1;
`;
export const BoxRight = styled.View`
  flex: 1;
`;
export const Title = styled.Text<TitleProps>`
  width: 80%;
  text-align: center;
  font-family: 'Nunito-Bold';
  font-size: ${theme.fontSize.normalTitle + 'px'};
  color: ${({color = theme.colors.black}) => color};
  align-self: center;
`;
