/* eslint-disable react/prop-types */
import React from 'react';
import { AsyncStorage } from 'react-native';

import { Container, TextInput, Button, Text } from '../shared/styledComponents';
import {
  messages,
  colors,
  placeholders,
  routes,
  buttons,
} from '../shared/constants';

const SignIn = ({ navigation: { navigate } }) => {
  const signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    navigate(routes.app);
  };

  return (
    <Container>
      <TextInput placeholder={placeholders.username} />
      <TextInput placeholder={placeholders.password} password />
      <Text color={colors.dark} onPress={() => navigate(routes.forget)}>
        {messages.forget}
      </Text>
      <Button onPress={signInAsync}>
        <Text color={colors.bright}>{buttons.login}</Text>
      </Button>
      <Text color={colors.dark} onPress={() => navigate(routes.register)}>
        {messages.register}
      </Text>
    </Container>
  );
};

export default SignIn;
