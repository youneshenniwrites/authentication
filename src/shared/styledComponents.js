import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-self: center;
  justify-content: center;
  width: 85%;
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
  padding: 16px;
  font-size: 18px;
  margin-bottom: 32px;
  border-color: #0195;
`;
