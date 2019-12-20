/* eslint-disable react/prop-types */
import React from 'react';

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

const SignUp = ({ navigation: { navigate } }) => (
  <Container>
    <Centered>
      <TextInput placeholder={placeholders.username} />
      <TextInput placeholder={placeholders.password} password />
      <TextInput
        placeholder={placeholders.email}
        keyboardType="email-address"
      />
      <TextInput placeholder={placeholders.phone} keyboardType="phone-pad" />
      <Text onPress={() => navigate(routes.login)}>{messages.already}</Text>
    </Centered>
    <Centered>
      <Button onPress={() => navigate(routes.confirm)}>
        <Text color={colors.bright}>{buttons.send}</Text>
      </Button>
    </Centered>
  </Container>
);

export default SignUp;
