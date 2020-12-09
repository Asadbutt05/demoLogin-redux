import React from 'react'
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import Signup from "../pages/auth/signup";
import Login from "../pages/auth/login";
import Home from "../pages/home/home";
import Profile from '../pages/profile/profile'
import Settings from '../pages/settings/settings'

const authStack = createStackNavigator({
  login:Login,
  signup:Signup
});

const homeTab = createBottomTabNavigator({
  home:Home,
  profile:Profile,
  settings:Settings
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'home') {
        iconName = focused
          ? 'home'
          : 'home-outline';
      } else if (routeName === 'profile') {
        iconName = focused ? 'person' : 'person-outline';
      }else if (routeName === 'settings') {
        iconName = focused ? 'ios-construct' : 'ios-construct-outline';
      }

      return <IconComponent name={iconName} size={35} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#4d94ff',
    inactiveTintColor: 'black',
    showLabel:false,
  },
});

const SwitchNav = createSwitchNavigator(
  {
  auth: authStack,
  home: homeTab
  },
  {
    initialRouteName: 'auth'
  }
)

 export default  AppContainer = createAppContainer(SwitchNav)