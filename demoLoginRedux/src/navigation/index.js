import React from 'react'
import {View,Image,Text} from 'react-native'
import { createStackNavigator } from "react-navigation-stack";
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import 'react-native-gesture-handler';
import Signup from "../pages/auth/signup";
import Login from "../pages/auth/login";
import Home from "../pages/home/home";
import Profile from '../pages/profile/profile'
import Settings from '../pages/settings/settings'
import {WP} from '../utilities/index'
import styles from '../styles/globalStyles'

const authStack = createStackNavigator({
  login:{
    screen:Login,
    navigationOptions:{
      headerShown:false
    }
  },
  signup:{
    screen:Signup,
    navigationOptions:{
    title:'Signup'
  }}
});

const homeStack = createStackNavigator({
  home:{
    screen:Home,
    navigationOptions:{
      headerShown:false,
    }
  }
})
const profileStack = createStackNavigator({
  profile:{
    screen: Profile,
  navigationOptions:{
    headerShown:false
  }}
})
const settingsStack = createStackNavigator({
  settings:{
    screen: Settings,
  navigationOptions:{
    headerShown:false
  }}
})


const CustomDrawer = (props)=>(
  <View>
    <View style={styles.customImageContainer}>
      <Image source={require('../assets/yui.jpg')}
      style={styles.drawerImage} />
      <Text style={styles.drawerImgText}>Yui Hirasawa</Text>
    </View>
    <View>
      <DrawerItems {...props}/>
    </View>
  </View>
)

const drawerStyle = {
  contentComponent:CustomDrawer,
  drawerType: "slide",
  drawerWidth: "80%",
  contentOptions: {
    activeLabelStyle: {
      flex:1,
      color: "#ff8566",
      fontSize: WP(6),
      //borderBottomWidth: WP(0.5),
      borderColor: "grey",
      paddingVertical: WP(6),
    },
    inactiveLabelStyle: {
      flex:1,
      color: "#ff8566",
      fontSize: WP(5),
      //borderBottomWidth: WP(0.5),
      borderColor: "grey",
      paddingVertical: WP(4),
    },
  },
}

const homeDrawer = createDrawerNavigator(
  {
    home: {
      screen: homeStack,
      navigationOptions:{
        title:'Home',
        drawerIcon:()=><IonIcons name="home" size={WP(6.5)} color="black" />
      }
    },
    profile: {
      screen: profileStack,
      navigationOptions:{
        title:'Profile',
        drawerIcon:()=><IonIcons name="person" size={WP(6.5)} color="black" />
      }
    },
    settings: {
      screen: settingsStack,
      navigationOptions:{
        title:'Settings',
        drawerIcon:()=><IonIcons name="ios-construct" size={WP(6.5)} color="black" />
      }
    },
  },
  {...drawerStyle,
    initialRouteName:'home'} 
);



const profileDrawer = createDrawerNavigator(
  {
    Home: {
      screen: homeStack,
      navigationOptions:{
        title:'Home',
        drawerIcon:()=><IonIcons name="home" size={WP(6.5)} color="black" />
      }
    },
    profile: {
      screen: profileStack,
      navigationOptions:{
        title:'Profile',
        drawerIcon:()=><IonIcons name="person" size={WP(6.5)} color="black" />
      }
    },
    settings: {
      screen: settingsStack,
      navigationOptions:{
        title:'Settings',
        drawerIcon:()=><IonIcons name="ios-construct" size={WP(6.5)} color="black" />
      }
    },
  },
 {...drawerStyle,initialRouteName:'profile'} 
);



const settingsDrawer = createDrawerNavigator(
  {
    Home: {
      screen: homeStack,
      navigationOptions:{
        title:'Home',
        drawerIcon:()=><IonIcons name="home" size={WP(6.5)} color="black" />
      }
    },
    profile: {
      screen: profileStack,
      navigationOptions:{
        title:'Profile',
        drawerIcon:()=><IonIcons name="person" size={WP(6.5)} color="black" />
      }
    },
      settings: {
       screen: settingsStack,
       navigationOptions:{
        title:'Settings',
        drawerIcon:()=><IonIcons name="ios-construct" size={WP(6.5)} color="black" />
      }
    },
  },
  {...drawerStyle,initialRouteName:'settings'} 
);


const tabNavigator = createBottomTabNavigator({
  home:homeDrawer,
  profile:profileDrawer,
  settings:settingsDrawer
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = IonIcons;
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

      return <IconComponent name={iconName} size={35} color={tintColor} />
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
  home: tabNavigator
  },
  {
    initialRouteName: 'auth'
  }
)

 export default  AppContainer = createAppContainer(SwitchNav)