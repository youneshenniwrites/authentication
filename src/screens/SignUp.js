/* eslint-disable react/prop-types */
import React from 'react';

import { Container, TextInput, Button, Text } from '../shared/styledComponents';
import {
  messages,
  colors,
  placeholders,
  routes,
  buttons,
} from '../shared/constants';

const SignUp = ({ navigation: { navigate } }) => (
  <Container>
    <TextInput placeholder={placeholders.username} />
    <TextInput placeholder={placeholders.password} password />
    <TextInput placeholder={placeholders.email} keyboardType="email-address" />
    <TextInput placeholder={placeholders.phone} keyboardType="phone-pad" />
    <Button onPress={() => navigate(routes.confirm)}>
      <Text color={colors.bright}>{buttons.send}</Text>
    </Button>
    <Text onPress={() => navigate(routes.login)}>{messages.already}</Text>
  </Container>
);

export default SignUp;
