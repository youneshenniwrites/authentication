/* eslint-disable react/prop-types */
import React from 'react';
import { AsyncStorage, Button } from 'react-native';

import { Container } from '../shared/styledComponents';

const HomeScreen = ({ navigation }) => {
  const showMoreApp = () => {
    navigation.navigate('Profile');
  };

  const signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate('AuthLoading');
  };
  return (
    <Container>
      <Button title="Show me more of the app" onPress={showMoreApp} />
      <Button title="Actually, sign me out :)" onPress={signOutAsync} />
    </Container>
  );
};
export default HomeScreen;
