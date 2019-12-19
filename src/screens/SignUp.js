/* eslint-disable react/prop-types */
import React from 'react';

import { Container, TextInput, Button, Text } from '../shared/styledComponents';
import { colors, content, routes } from '../shared/constants';

const SignUp = ({ navigation: { navigate } }) => (
  <Container>
    <TextInput placeholder={content.username} />
    <TextInput placeholder={content.password} password />
    <TextInput placeholder={content.email} keyboardType="email-address" />
    <TextInput placeholder={content.phone} keyboardType="phone-pad" />
    <Button onPress={() => navigate(routes.confirm)}>
      <Text color={colors.bright}>Sign up</Text>
    </Button>
    <Text color={colors.dark} onPress={() => navigate(routes.login)}>
      Already registered ?
    </Text>
  </Container>
);

export default SignUp;
