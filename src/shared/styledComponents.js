import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.TextInput.attrs(props => ({
  autoCapitalize: 'none',
  placeholder: props.placeholder,
  autoCorrect: false,
  secureTextEntry: props.password,
}))`
  border-width: 1px;
  border-radius: 30px;
  background-color: #fafafa;
  height: 55px;
  width: ${width * 0.9}px;
  padding: 16px;
  font-size: 18px;
  margin-bottom: 32px;
  border-color: #0195;
`;

export const Button = styled.TouchableOpacity`
  background-color: blue;
  width: ${width * 0.9}px;
  height: 55px;
  padding: 16px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.color};
`;