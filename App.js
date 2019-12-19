import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Loading from './src/screens/Loading';
import SignIn from './src/screens/SignIn';

const AppStack = createStackNavigator({ Home, Profile });
const AuthStack = createStackNavigator({ SignIn });

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
