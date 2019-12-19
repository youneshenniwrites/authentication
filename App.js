import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  Loading,
  Home,
  Profile,
  SignIn,
  SignUp,
  ForgetPassword,
} from './src/screens';

const AppStack = createStackNavigator({ Home, Profile });
const AuthStack = createStackNavigator({ SignIn, SignUp, ForgetPassword });

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
    }
  )
);
