import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import { Home, Profile, Settings } from '../screens';
import { colors } from '../shared';

const options = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    indicatorStyle: {
      height: 0,
    },
    activeTintColor: colors.blue,
    inactiveTintColor: colors.dark,
    style: {
      backgroundColor: colors.bright,
    },
  },
};

const AppStack = createMaterialTopTabNavigator(
  { Home, Profile, Settings },
  options
);

export default AppStack;
