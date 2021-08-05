import {theme} from '@src/styles';
import styled from 'styled-components/native';

interface TextComponentsProps {
  fontSize?: number;
  fontWeight?: number | string;
  color?: string;
  margin?: string;
  width?: string | number;
  textAlign?: string;
  fontFamily?: string;
  flex?: number;
}

export const TextComponent = styled.Text<TextComponentsProps>`
  width: ${({width = 'auto'}) => width};
  font-size: ${({fontSize = theme.fontSize.base}) => fontSize + 'px'};
  color: ${({color = theme.colors.black}) => color};
  margin: ${({margin = '0px 0px 0px 0px'}) => margin};
  text-align: ${({textAlign = 'left'}) => textAlign};
  font-family: ${({fontFamily = 'Nunito-Regular'}) => fontFamily};
`;
