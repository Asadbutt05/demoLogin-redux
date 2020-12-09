import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
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