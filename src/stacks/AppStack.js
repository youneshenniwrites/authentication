import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import { Home, Profile, Settings } from '../screens';

const AppStack = createMaterialTopTabNavigator({ Home, Profile, Settings });

export default AppStack;
