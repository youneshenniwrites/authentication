/* eslint-disable react/prop-types */
import React from 'react';
import { AsyncStorage, Button } from 'react-native';

import { Container } from '../shared/styledComponents';
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
      <Button title="Show me more of the app" onPress={showMoreApp} />
      <Button title="Actually, sign me out :)" onPress={signOutAsync} />
    </Container>
  );
};
export default HomeScreen;
