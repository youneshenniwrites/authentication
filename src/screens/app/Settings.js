/* eslint-disable react/prop-types */
import React from 'react';
import { AsyncStorage } from 'react-native';

import {
  Container,
  Button,
  Text,
  TextInput,
  Centered,
} from '../../shared/styledComponents';
import { routes, colors, buttons, placeholders } from '../../shared/constants';

const Settings = ({ navigation }) => {
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate(routes.loader);
  };
  return (
    <Container>
      <Centered>
        <TextInput placeholder={placeholders.oldPassword} password />
        <TextInput placeholder={placeholders.newPassword} password />
        <Button>
          <Text color={colors.bright}>{buttons.confirm}</Text>
        </Button>
      </Centered>
      <Centered>
        <Button onPress={signOutAsync}>
          <Text color={colors.bright}>{buttons.logout}</Text>
        </Button>
      </Centered>
    </Container>
  );
};
export default Settings;
