import {theme} from '@src/styles';
import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {TextComponent} from '../TextComponent';
import {Container, Label} from './styles';

interface ButtonProps {
  onPress:
    | (((event: GestureResponderEvent) => void) &
        ((e: GestureResponderEvent) => void))
    | undefined;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  width?: string | number;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  backgroundColor,
  margin,
  padding,
  width,
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      margin={margin}
      padding={padding}
      onPress={onPress}
      width={width}>
      <TextComponent fontFamily="Nunito-Bold" color={theme.colors.white}>
        {children}
      </TextComponent>
    </Container>
  );
};

export default Button;
