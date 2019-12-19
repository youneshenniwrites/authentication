/* eslint-disable react/prop-types */
import React from 'react';
import { AsyncStorage } from 'react-native';

import { Container, TextInput, Button, Text } from '../shared/styledComponents';
import { colors, content, routes } from '../shared/constants';

const ForgetPassword = ({ navigation: { navigate } }) => (
  <Container>
    <Text color={colors.dark}>Hi</Text>
  </Container>
);

export default ForgetPassword;
