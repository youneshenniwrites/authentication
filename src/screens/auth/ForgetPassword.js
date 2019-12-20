/* eslint-disable react/prop-types */
import React from 'react';

import {
  Container,
  Centered,
  TextInput,
  Button,
  Text,
  colors,
  placeholders,
  buttons,
  routes,
} from '../../shared';

const ForgetPassword = ({ navigation: { navigate } }) => (
  <Container>
    <Centered>
      <TextInput placeholder={placeholders.username} />
    </Centered>
    <Centered>
      <Button onPress={() => navigate(routes.password)}>
        <Text color={colors.bright}>{buttons.code}</Text>
      </Button>
    </Centered>
  </Container>
);

export default ForgetPassword;
