import { colors } from '../shared';

export const tabOptions = {
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

export const stackOptions = title => ({
  title,
  headerTintColor: colors.dark,
  headerBackTitle: 'Back',
  headerStyle: {
    backgroundColor: colors.creamy,
    borderBottomWidth: 0,
  },
});
