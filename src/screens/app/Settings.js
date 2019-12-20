/* eslint-disable react/prop-types */
import React from 'react';
import { AsyncStorage } from 'react-native';

import { FlexCentered, Button, Text } from '../../shared/styledComponents';
import { routes, colors, buttons } from '../../shared/constants';

const Settings = ({ navigation }) => {
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate(routes.loader);
  };
  return (
    <FlexCentered>
      <Button onPress={signOutAsync}>
        <Text color={colors.bright}>{buttons.logout}</Text>
      </Button>
    </FlexCentered>
  );
};
export default Settings;
