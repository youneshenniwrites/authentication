/* eslint-disable react/prop-types */
import React from 'react';

import { Container, Text, TextInput, Button } from '../shared/styledComponents';
import { colors, placeholders, buttons } from '../shared/constants';

const ForgetPassword = () => (
  <Container>
    <TextInput placeholder={placeholders.username} />
    <Button>
      <Text color={colors.bright}>{buttons.code}</Text>
    </Button>
    <TextInput placeholder={placeholders.newPassword} password />
    <TextInput placeholder={placeholders.code} keyboardType="numeric" />
    <Text color={colors.bright}>{buttons.send}</Text>
    <Button>
      <Text color={colors.bright}>{buttons.confirm}</Text>
    </Button>
  </Container>
);

export default ForgetPassword;
