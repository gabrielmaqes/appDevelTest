import {theme} from '../../styles';
import React, {ChangeEvent} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {InputText, Container} from './styles';

type InputProps = {
  placeholder?: string;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  onChange?: (e: string) => void;
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
  iconColor,
  iconSize,
  labelSize,
  border,
  editable = true,
  labelColor,
  style,
}) => {
  return (
    <>
      <Container style={style} border={border}>
        {iconName ? (
          <View style={{marginRight: theme.metrics.smallSpacing}}>
            <Icons size={iconSize} name={iconName} color={iconColor} />
          </View>
        ) : null}
        <InputText
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
        />
      </Container>
    </>
  );
};

export default Input;
