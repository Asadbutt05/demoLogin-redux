import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import signup from "../pages/auth/Signup";
import login from "../pages/auth/Login";
import home from "../pages/home/Home";

const authStack = createStackNavigator({
  login: login,
    signup:signup
});

// Add all screens for Home Stack
const homeStack = createStackNavigator({
  home: {
    screen:home
  }  
});

var SwitNav = createSwitchNavigator({
  auth: {
    screen: authStack
  },
  app: {
    screen: homeStack
  }
});

export var AppContainer = createAppContainer(SwitNav);
