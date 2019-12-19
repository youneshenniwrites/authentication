/* eslint-disable react/prop-types */
import React, { useEffect, useCallback } from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';

import { Container } from '../shared/styledComponents';
import { routes } from '../shared/constants';

const Loading = ({ navigation }) => {
  const isUserLoggedIn = useCallback(async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    navigation.navigate(userToken ? routes.app : routes.auth);
  }, [navigation]);

  useEffect(() => {
    isUserLoggedIn();
  }, [isUserLoggedIn]);

  return (
    <Container>
      <ActivityIndicator />
    </Container>
  );
};

export default Loading;
