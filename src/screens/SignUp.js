/* eslint-disable react/prop-types */
import React from 'react';
import { AsyncStorage } from 'react-native';

import { Container, TextInput, Button, Text } from '../shared/styledComponents';
import { colors, content, routes } from '../shared/constants';

const SignUp = ({ navigation: { navigate } }) => {
  const signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    navigate(routes.app);
  };

  return (
    <Container>
      <TextInput placeholder={content.username} />
      <TextInput placeholder={content.password} password />
      <Button onPress={signInAsync}>
        <Text color={colors.bright}>Sign in</Text>
      </Button>
      <Text color={colors.dark} onPress={() => navigate(routes.login)}>
        Already registered ?
      </Text>
    </Container>
  );
};

export default SignUp;
