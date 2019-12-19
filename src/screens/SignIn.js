/* eslint-disable react/prop-types */
import React from 'react';
import { AsyncStorage } from 'react-native';

import { Container, TextInput, Button, Text } from '../shared/styledComponents';
import { colors, content, routes } from '../shared/constants';

const SignIn = ({ navigation }) => {
  const signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    navigation.navigate(routes.app);
  };

  return (
    <Container>
      <TextInput placeholder={content.username} />
      <TextInput placeholder={content.password} password />
      <Text color={colors.dark}>Forget password?</Text>
      <Button onPress={signInAsync}>
        <Text color={colors.bright}>Sign in</Text>
      </Button>
      <Text color={colors.dark}>Create an account</Text>
    </Container>
  );
};

export default SignIn;
