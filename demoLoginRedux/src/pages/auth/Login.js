import React from 'react'
import {Alert, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from '../../styles/globalStyles'
import inputStyle from '../../styles/input'
import {login} from '../../store/actions/auth/auth'
import { connect } from 'react-redux'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {loading:false, email: '',pwd:'',xPwd:false}; 
    
    const check = this.props.users.find(user=>user.isLogged === true)
    if(check){
      this.props.navigation.navigate('home')
    }
  }

    loginStatus(usersObj,email){
        this.props.login(usersObj,email)
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

    login(email,pwd){
      this.setState({loading:true})
      try {
        let usersObj = this.props.users
        if (usersObj !== null) {
          const check = usersObj.find(person=>person.email.toLowerCase()===email.toLowerCase())
          if(check){
            console.log("User Found: ",check)
            if(check.pwd===pwd){
              this.loginStatus(usersObj,email.toLowerCase())
            }else{
              this.setState({xPwd:true, loading:false})
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
            <Text style={styles.text}> Welcome to Login Screen</Text>
              <TextInput 
                  style={inputStyle.input}
                  type
                   placeholder='Email...'
                   onChangeText={(value)=>this.handleEmail(value)}
                   placeholderTextColor='#74b3b0'/>
              <TextInput 
                  style={inputStyle.input}
                   placeholder='Password...'
                   onChangeText={(value)=>this.handlePwd(value)}
                   placeholderTextColor='#74b3b0'
                   secureTextEntry/>
                   {xPwd && <Text style={inputStyle.incorrect}>Invalid Password!</Text>}
            <TouchableOpacity 
              style={styles.submit} 
              onPress={()=>{this.login(email,pwd)}}
              >
            <Text style={styles.log}>LOGIN</Text>
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

const mapDispatchProps = (dispatch) => {
  return{
    login:(users,email)=>dispatch(login(users,email))
  }
}

const mapStateToProps = (state) => {
  return {
      users: state.auth.users
  };
};

export default connect(
  mapStateToProps,
  mapDispatchProps
  )(Login)