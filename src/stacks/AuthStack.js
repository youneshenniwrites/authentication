import { createStackNavigator } from 'react-navigation-stack';

import {
  SignIn,
  SignUp,
  ForgetPassword,
  ConfirmPassword,
  ConfirmSignUp,
} from '../screens';

const AuthStack = createStackNavigator({
  SignIn,
  SignUp,
  ConfirmSignUp,
  ForgetPassword,
  ConfirmPassword,
});

export default AuthStack;
