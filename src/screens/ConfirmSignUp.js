/* eslint-disable react/prop-types */
import React from 'react';

import { Container, TextInput, Text, Button } from '../shared/styledComponents';
import { colors, placeholders, routes, buttons } from '../shared/constants';

const ConfirmSignUp = ({ navigation: { navigate } }) => (
  <Container>
    <TextInput placeholder={placeholders.code} />
    <Button onPress={() => navigate(routes.app)}>
      <Text color={colors.bright}>{buttons.confirm}</Text>
    </Button>
    <Button>
      <Text color={colors.bright}>{buttons.resend}</Text>
    </Button>
  </Container>
);

export default ConfirmSignUp;
