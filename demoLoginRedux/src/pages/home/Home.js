import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/GlobalStyles'


export default class Home extends Component {
    constructor(){
        super()
        this.state = {user:{}, users:{}, loading:false}    
    }
    async getData(){
      try {
        const users = await AsyncStorage.getItem('users')
        const usersObj = JSON.parse(users)
        console.log(usersObj)
        this.setState({users:usersObj})
        if(usersObj !== null) {
          const check = usersObj.find(person=>person.isLogged===true)
          this.setState({user:check})
        }
      } catch(e) {
        console.log('Error getting data ',e)
      }
    }
    componentDidMount(){
        this.getData()
      }

      async loginStatus(check){
       let usersObj = this.state.users
        usersObj = usersObj.map(user=>{
            if(user.email===check.email){
                return {...user, isLogged:false}
            }else return user
        })
        console.log('User logged in: ', usersObj)
        await AsyncStorage.setItem('users', JSON.stringify(usersObj));
      }

      async removeLogin(user){
        this.setState({loading:true})
        try {
          this.loginStatus(user)
          console.log(user.username + ' logged out!!!')
          // this.props.navigation.reset({
          //     index: 0,
          //     routes: [{ name: 'Login' }],
          //   });
          this.setState({loading:false})
          this.props.navigation.navigate('Auth')
        } catch(e) {
        // error reading value
        console.log(e+' ERRORRRRR')
        }
    }
   
    async deletAll(){
      await AsyncStorage.removeItem('users')
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
     }

     render() {
      const {user, loading} = this.state
        return (
            <View style={styles.container}> 
                <Text style={styles.text}> Welcome to Home Screen! </Text>
                <Text style={styles.name}>User: {user.username} </Text>
                <Text style={styles.name}>Email: {user.email} </Text>
                <Text style={styles.name}>Logged in: {user.isLogged && 'True'} </Text>
                <TouchableOpacity 
                    style={styles.submit} 
                    onPress={()=>this.removeLogin(user)}>
                    <Text>LOGOUT</Text>
                </TouchableOpacity>
                {loading && <ActivityIndicator size={"large"} color={"red"}/>}
            </View>

        )
    }
}

