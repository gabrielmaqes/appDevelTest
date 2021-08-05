import styled from 'styled-components/native';
import {theme} from '@src/styles';
type InputModal = {
  border?: string;
  focus: boolean;
};
export const InputText = styled.TextInput<{
  labelSize?: number;
  labelColor?: string;
}>`
  flex: 1;
  color: ${({labelColor = theme.colors.black}) => labelColor};
  font-size: ${({labelSize = 16}) => labelSize + 'px'};
`;
export const Container = styled.View<InputModal>`
  flex-direction: row;
  border: ${({border = `2px solid ${theme.colors.primaryPurple}`}) => border};
  align-items: center;
  padding: 2px 5px 2px 24px;
  border-radius: 8px;
  min-height: 48px;
  margin: ${theme.metrics.baseSpacing + 'px'} 0;
  border: 2px solid
    ${({focus}) =>
      focus ? theme.colors.primaryPurple : theme.colors.secondaryPurple};
`;
