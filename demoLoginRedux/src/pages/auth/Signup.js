import React, { Component } from 'react'
import {Text, TextInput, View, TouchableOpacity,Alert, ActivityIndicator } from 'react-native'
import {connect} from 'react-redux'
import {signup} from '../../store/actions/auth/auth'
import inputStyle from '../../styles/Input'
import styles from '../../styles/GlobalStyles'
import {emailValidator} from '../../utilities'

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {email:'', username:'', pwd:'', confirmPwd:'', first:true, loading:false};
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
         if((emailValidator(email)===false)&&(this.validatePwd(pwd)===false)&&(this.validatePwd(pwd)===false)&&(this.validateConfirmPwd(pwd,confirmPwd)===false)){
           console.log(email+' '+username+' '+pwd)
           this.storeData()
         }else{
          this.setState({loading:false})
           console.log('Somethings wrong!!!!')
         }
      })
   }
    
 storeData(){
  const {email, username, pwd} = this.state
  const check = this.props.users.find(user=>user.email===email)
    if(check){
      this.createAlert()
    }else{
      const tempUser = {email:email, username:username, pwd:pwd, isLogged:false}
      this.props.signup(tempUser)
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

   
render() {
  const {loading, email, username, pwd, confirmPwd, first} = this.state
        return (
            <View>
                <TextInput 
                    style={inputStyle.input}
                     placeholder='Email...'
                     onChangeText={(val)=>this.handleEmail(val)}
                     placeholderTextColor='#74b3b0'/>
                     {(!emailValidator(email)&&!first) && <Text style={inputStyle.incorrect}>Invalid Email Format!</Text>}
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

const mapStateToProps = (state)=>{
  return{
    users:state.auth.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    signup:(user)=>dispatch(signup(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)