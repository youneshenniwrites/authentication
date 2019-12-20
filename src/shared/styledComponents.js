import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors } from './constants';

const { width } = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.creamy};
`;

export const Centered = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${colors.creamy};
`;

export const FlexCentered = styled(Centered)`
  flex: 1;
`;

export const TextInput = styled.TextInput.attrs(props => ({
  autoCorrect: false,
  autoCapitalize: 'none',
  returnKeyType: 'done',
  placeholder: props.placeholder,
  secureTextEntry: props.password,
}))`
  font-size: 18px;
  border-color: ${colors.bright};
  border-width: 0.5px;
  border-radius: 30px;
  background-color: ${colors.bright};
  height: 55px;
  width: ${width * 0.9}px;
  padding: 16px;
  padding-left: 24px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.blue};
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
