import React, { Component } from 'react'
import {Alert, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/GlobalStyles'
import inputStyle from '../styles/Input'

export default class Login extends Component {
  constructor(){
    super()
    this.state = {loading:false, email: '',pwd:'',xPwd:false};    
  }

  async loginStatus(check,usersObj){
      usersObj = usersObj.map(user=>{
          if(user.email === check.email){
              return {...user, isLogged:true}
          }else return user
      })
      await AsyncStorage.setItem('users', JSON.stringify(usersObj));
      this.setState({loading:false})
      this.props.navigation.navigate('home')
    }
    
  createAlert(){
    Alert.alert(
      "Alert!",
      "User not found\nPlease SignUp First!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    )}

  async login(email,pwd){
    this.setState({loading:true})
    try {
      const users = await AsyncStorage.getItem('users');
      let usersObj = JSON.parse(users)
      if (usersObj !== null) {
        console.log(usersObj,'aaaaa');
        const check = usersObj.find(person=>person.email.toLowerCase()===email.toLowerCase())
        if(check){
          console.log("User Found: ",check);
          if(check.pwd===pwd){
            this.loginStatus(check,usersObj)
          }else{
            this.setState({xPwd:true})
            this.setState({loading:false})
          }
        }else{
          console.log('User Not Found!!!',usersObj)
          this.createAlert()
          this.setState({loading:false})
        }
      }
      else{
        this.createAlert()
        this.setState({loading:false})
        console.log('No Users!!!',usersObj);
      }
    } catch (error) {
      // Error retrieving data
      console.log("Error getting data! ",error);

    }
  }

  handleEmail(text){
    this.setState({ email: text })
  }
  handlePwd(text){
    this.setState({ pwd: text })
  }

  render() {
    const {loading, email,pwd,xPwd} = this.state
      return (
          <View>
            <Text style={styles.text}> Welcome to Login Screen! </Text>
              <TextInput 
                  style={inputStyle.input}
                   placeholder='Email...'
                   onChangeText={(value)=>this.handleEmail(value)}
                   placeholderTextColor='#74b3b0'/>
              <TextInput 
                  style={inputStyle.input}
                   placeholder='Password...'
                   onChangeText={(value)=>this.handlePwd(value)}
                   placeholderTextColor='#74b3b0'
                   secureTextEntry={true}/>
                   {xPwd && <Text style={inputStyle.incorrect}>Invalid Password!</Text>}
            <TouchableOpacity 
              style={styles.submit} 
              onPress={()=>{this.login(email,pwd)}}
              >
            <Text>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity  
              style={inputStyle.button}
              onPress={()=>{this.props.navigation.navigate('signup')}}
              >
            <Text style={inputStyle.buttonText}>SignUp Instead!</Text>
            </TouchableOpacity>
            {loading && <ActivityIndicator size={"large"} color={"red"} />}
            
          </View>
      )
    }
}
