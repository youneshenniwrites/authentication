/* eslint-disable react/prop-types */
import React, { useEffect, useCallback } from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';

import { Container } from '../shared/styledComponents';

const Loading = ({ navigation }) => {
  const _bootstrapAsync = useCallback(async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    navigation.navigate(userToken ? 'App' : 'Auth');
  }, [navigation]);

  useEffect(() => {
    _bootstrapAsync();
  }, [_bootstrapAsync]);

  return (
    <Container>
      <ActivityIndicator />
    </Container>
  );
};

export default Loading;
