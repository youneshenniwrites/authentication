import { createStackNavigator } from 'react-navigation-stack';

import {
  SignIn,
  SignUp,
  ForgetPassword,
  ConfirmPassword,
  ConfirmSignUp,
} from '../screens';
import { stackOptions } from '../utils';
import { titles } from '../shared';

const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: stackOptions(titles.login),
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: stackOptions(titles.register),
  },
  ConfirmSignUp: {
    screen: ConfirmSignUp,
    navigationOptions: stackOptions(titles.confirm),
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: stackOptions(titles.forget),
  },
  ConfirmPassword: {
    screen: ConfirmPassword,
    navigationOptions: stackOptions(titles.newPassword),
  },
});

export default AuthStack;
