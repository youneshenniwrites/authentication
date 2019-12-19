/* eslint-disable react/prop-types */
import React from 'react';

import { Container, TextInput, Text } from '../shared/styledComponents';
import { colors, content } from '../shared/constants';

const ConfirmSignUp = () => (
  <Container>
    <TextInput placeholder={content.username} />
    <TextInput placeholder={content.password} password />
    <Text color={colors.dark}>TODO</Text>
  </Container>
);

export default ConfirmSignUp;
