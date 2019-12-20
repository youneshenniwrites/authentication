/* eslint-disable react/prop-types */
import React, { useEffect, useCallback } from 'react';
import { AsyncStorage } from 'react-native';

import { routes } from '../shared/constants';
import Spinner from '../components/Spinner';

const Loading = ({ navigation }) => {
  const isUserLoggedIn = useCallback(async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    navigation.navigate(userToken ? routes.app : routes.auth);
  }, [navigation]);

  useEffect(() => {
    isUserLoggedIn();
  }, [isUserLoggedIn]);

  return <Spinner />;
};

export default Loading;
