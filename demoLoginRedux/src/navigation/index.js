import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import 'react-native-gesture-handler';
import {connect} from 'react-redux'
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import Home from "../pages/home/Home";

const authStack = createStackNavigator({
  login:Login,
  signup:Signup
});

const homeStack = createStackNavigator({
  home:Home
})


const SwitchNav = createSwitchNavigator(
  {
  auth: authStack,
  home: homeStack
  },
  {
    initialRouteName: 'auth'
  }
)
// var defRoute
// function setDefaultRoute(props){
//   const check = props.users.find(user=>user.isLogged===true)
//   if(check){
//       defRoute = 'home'
//   }else{
//       defRoute = 'auth'
//   }
  
// }
//setDefaultRoute();

//  const mapStateToProps = (state)=>{
//    return{
//      users:state.auth.users
//    }
//  }

 //connect(mapStateToProps)(setDefaultRoute)
 export default  AppContainer = createAppContainer(SwitchNav)