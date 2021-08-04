import styled from 'styled-components/native';
import {theme} from '../../styles';
type ButtonProps = {
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  width?: string | number;
};
export const Container = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({backgroundColor = theme.colors.black}) =>
    backgroundColor};
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  width: ${({width = 'auto'}) => {
    if (typeof width === 'string') {
      return width;
    } else {
      return width + 'px';
    }
  }};
  padding: ${({padding = '10px 15px 10px 15px'}) => padding};
  margin: ${({margin = '0px 0px 0px 0px'}) => margin};
  border-radius: ${theme.metrics.baseRadius + 'px'};
`;

export const Label = styled.Text`
  font-size: ${theme.fontSize.base + 'px'};
  font-family: 'Nunito-Bold';
  color: ${theme.colors.white};
`;
