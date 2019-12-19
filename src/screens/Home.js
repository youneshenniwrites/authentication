/* eslint-disable react/prop-types */
import React from 'react';
import { AsyncStorage } from 'react-native';

import { Container, Text } from '../shared/styledComponents';
import { routes } from '../shared/constants';

const HomeScreen = ({ navigation }) => {
  const showMoreApp = () => {
    navigation.navigate(routes.profile);
  };

  const signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate(routes.loader);
  };
  return (
    <Container>
      <Text onPress={showMoreApp}>Show me more of the app</Text>
      <Text onPress={signOutAsync}>Actually, sign me out :)</Text>
    </Container>
  );
};
export default HomeScreen;
