/* eslint-disable react/prop-types */
import React from 'react';
import { AsyncStorage } from 'react-native';

import {
  Container,
  Centered,
  TextInput,
  Button,
  Text,
  messages,
  colors,
  placeholders,
  routes,
  buttons,
} from '../../shared';

const SignIn = ({ navigation: { navigate } }) => {
  // TODO: move this to utils
  const signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    navigate(routes.app);
  };

  return (
    <Container>
      <Centered>
        <TextInput placeholder={placeholders.username} />
        <TextInput placeholder={placeholders.password} password />
        <Text color={colors.dark} onPress={() => navigate(routes.forget)}>
          {messages.forget}
        </Text>
      </Centered>
      <Centered>
        <Text onPress={() => navigate(routes.register)}>
          {messages.register}
        </Text>
        <Button onPress={signInAsync}>
          <Text color={colors.bright}>{buttons.login}</Text>
        </Button>
      </Centered>
    </Container>
  );
};

export default SignIn;
