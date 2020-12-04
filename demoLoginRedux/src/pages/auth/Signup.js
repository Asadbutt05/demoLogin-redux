import React, { Component } from 'react'
import {Text, TextInput, View, TouchableOpacity,Alert, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import inputStyle from '../styles/Input'
import styles from '../styles/GlobalStyles'

export default class Signup extends Component {
  constructor(){
    super()
    this.state = {users:{},email:'', username:'', pwd:'', confirmPwd:'', first:true, loading:false};
  }

  handleEmail(text){
    this.setState({ email: text })
  }
  handleUsername(text){
    this.setState({ username: text })
  }
  handlePwd(text){
    this.setState({ pwd: text })
  }
  handleConfirmPwd(text){
    this.setState({ confirmPwd: text })
  }

    validateEmail(input){
      let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if((!(input.match(mailFormat))&&(this.state.first!==true))){
        return true
      }
      else{
        return false
      }
    }

    validateUsername(input){
        if((input.trim().length<4)&&(this.state.first!==true)){
          return true
        }else{
          return false
        }
    }

    validatePwd(input){
      if((input.length<6)&&(this.state.first!==true)){
        return true
      }else{
        return false
      }
    }

    validateConfirmPwd(val1,val2){
      if(((val1!==val2)||((val2)===''))&&(this.state.first!==true)){
        return true
      }else{
        return false
      }
    }
 
    validateAll(){
      this.setState({first:false, loading:true},()=>{
        const {email, username, pwd, confirmPwd} = this.state
         if((this.validateEmail(email)===false)&&(this.validatePwd(pwd)===false)&&(this.validatePwd(pwd)===false)&&(this.validateConfirmPwd(pwd,confirmPwd)===false)){
           console.log(email+' '+username+' '+pwd)
           this.storeData(email)
         }else{
          this.setState({loading:false})
           console.log('Somethings wrong!!!!')
         }
      })
   }
    
async storeData(val){
  const {email, username, pwd} = this.state
    const tempUser = [{email:email, username:username, pwd:pwd, isLogged:false}]
    const users = await AsyncStorage.getItem('users')
      if (users !== null) {
        console.log('Data Found', users)
        let newUsers = JSON.parse(users)
        this.setState({users:newUsers})
        const check = newUsers.find(user=>user.email===val)
        if(check){
          this.createAlert()
          this.setState({loading:false})
        }else{
          newUsers = newUsers.concat(tempUser);
          AsyncStorage.setItem('users', JSON.stringify(newUsers))
          this.props.navigation.navigate('login')
        }
      } else {
        console.log('No user Found, new user stored')
        AsyncStorage.setItem('users', JSON.stringify(tempUser))
        this.props.navigation.navigate('login')
      }
  }

  createAlert(){
    Alert.alert(
      "Alert!",
      "User already exists\nPlease use a different email!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    )}
  async deletAll(){
    await AsyncStorage.removeItem('users')
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
   }
   
render() {
  const {loading, email, username, pwd, confirmPwd} = this.state
        return (
            <View>
                <TextInput 
                    style={inputStyle.input}
                     placeholder='Email...'
                     onChangeText={(val)=>this.handleEmail(val)}
                     placeholderTextColor='#74b3b0'/>
                     {this.validateEmail(email) && <Text style={inputStyle.incorrect}>Invalid Email Format!</Text>}
                     <TextInput 
                    style={inputStyle.input}
                     placeholder='Username...'
                     onChangeText={(val)=>this.handleUsername(val)}
                     placeholderTextColor='#74b3b0'/>
                     {this.validateUsername(username) && <Text style={inputStyle.incorrect}>Username must be atleast 4 characters!</Text>}
                     <TextInput 
                    style={inputStyle.input}
                     placeholder='Password...'
                     onChangeText={(val)=>this.handlePwd(val)}
                     placeholderTextColor='#74b3b0'
                     secureTextEntry={true}/>
                     {this.validatePwd(pwd) && <Text style={inputStyle.incorrect}>Password must be atleast 6 characters!</Text>}
                     <TextInput 
                    style={inputStyle.input}
                     placeholder='Confirm Password...'
                     onChangeText={(val)=>this.handleConfirmPwd(val)}
                     placeholderTextColor='#74b3b0' 
                     secureTextEntry={true}/>
                      {this.validateConfirmPwd(pwd,confirmPwd) && <Text style={inputStyle.incorrect}>Passwords do not match!</Text>}
                <TouchableOpacity 
                    style={styles.submit} 
                    onPress={()=>this.validateAll()}>
                  <Text>SIGNUP</Text>
                </TouchableOpacity>
                {loading && <ActivityIndicator size={"large"} color={'red'}/>}
            </View>
        )
    }
}
