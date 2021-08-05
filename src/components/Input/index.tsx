import {theme} from '@src/styles';
import React, {useState} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {InputText, Container} from './styles';

type InputProps = {
  placeholder?: string;
  iconName?: string;
  iconSize?: number;
  onChange?: (e: string) => void;
  onFocus?: ({}: any) => void;
  value?: string;
  autoFocus?: boolean;
  labelSize?: number;
  border?: string;
  labelColor?: string;
  editable?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  iconName,
  value,
  onChange,
  onFocus,
  iconSize,
  labelSize,
  border,
  editable = true,
  labelColor,
  style,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(!isFocused);
  }
  return (
    <>
      <Container focus={isFocused} style={style} border={border}>
        {iconName ? (
          <View style={{marginRight: theme.metrics.smallSpacing}}>
            <Icons
              size={iconSize}
              name={iconName}
              color={
                isFocused
                  ? theme.colors.primaryPurple
                  : theme.colors.secondaryPurple
              }
            />
          </View>
        ) : null}
        <InputText
          onPressIn={onFocus}
          style={[{opacity: editable ? 1 : 0.5}]}
          labelColor={labelColor}
          selectionColor={labelColor || theme.colors.black}
          onChangeText={onChange}
          value={value}
          placeholderTextColor={theme.colors.secondaryPurple}
          placeholder={placeholder}
          autoCapitalize="sentences"
          labelSize={labelSize}
          editable={editable}
          onFocus={handleFocus}
          onBlur={handleFocus}
        />
      </Container>
    </>
  );
};

export default Input;
