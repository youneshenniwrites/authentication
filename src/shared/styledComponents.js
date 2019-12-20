import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors } from './constants';

const { width } = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #e6ebf0;
`;

export const Centered = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.TextInput.attrs(props => ({
  autoCorrect: false,
  autoCapitalize: 'none',
  returnKeyType: 'done',
  placeholder: props.placeholder,
  secureTextEntry: props.password,
}))`
  font-size: 18px;
  border-color: #0195;
  border-width: 1px;
  border-radius: 30px;
  background-color: #fafafa;
  height: 55px;
  width: ${width * 0.9}px;
  padding: 16px;
  padding-left: 24px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const Button = styled.TouchableOpacity`
  background-color: blue;
  width: ${width * 0.9}px;
  height: 55px;
  padding: 16px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.color ? props.color : colors.dark)};
`;
