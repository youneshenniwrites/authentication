/* eslint-disable react/prop-types */
import React from 'react';
import { AsyncStorage } from 'react-native';

import { Container, TextInput, Button, Text } from '../shared/styledComponents';

const SignIn = ({ navigation }) => {
  const signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    navigation.navigate('App');
  };

  return (
    <Container>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" password />
      <Button onPress={signInAsync}>
        <Text>Sign in</Text>
      </Button>
    </Container>
  );
};

export default SignIn;
