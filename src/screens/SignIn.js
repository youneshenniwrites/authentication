/* eslint-disable react/prop-types */
import React from 'react';
import { AsyncStorage, Button } from 'react-native';

import { Container, TextInput } from '../shared/styledComponents';

const SignIn = ({ navigation }) => {
  const signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    navigation.navigate('App');
  };

  return (
    <Container>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" password />
      <Button title="Sign in!" onPress={signInAsync} />
    </Container>
  );
};

export default SignIn;
