import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import { Home, Profile, Settings } from '../screens';
import { tabOptions } from '../utils/options';

const AppStack = createMaterialTopTabNavigator(
  { Home, Profile, Settings },
  tabOptions
);

export default AppStack;
