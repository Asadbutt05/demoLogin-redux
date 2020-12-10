import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import {connect} from 'react-redux'
import {logout} from '../../store/actions/auth/auth'
import styles from '../../styles/globalStyles'

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {user:{}, loading:false}    
    }
    
    componentDidMount(){
        const user = this.props.users.find(user=>user.isLogged===true)
        this.setState({user:user})
      }

      removeLogin(user){
        this.setState({loading:true})
        try {
          this.props.logout(this.props.users,user.email)
          this.setState({loading:false})
          this.props.navigation.navigate('login')
        } catch(e) {
        // error reading value
        console.log(e+' ERRORRRRR')
        }
    }

     render() {
      const {user, loading} = this.state
        return (
            <View style={styles.container}> 
                <Text style={styles.text}> Welcome to Profile Screen</Text>
                <View style={styles.body}>
                  <Text style={styles.name}>User: {user.username} </Text>
                  <Text style={styles.name}>Email: {user.email} </Text>
                  <Text style={styles.name}>Logged in: {user.isLogged && 'True'} </Text>
                </View>
                <TouchableOpacity 
                    style={styles.submit} 
                    onPress={()=>this.removeLogin(user)}>
                    <Text style={styles.log}>LOGOUT</Text>
                </TouchableOpacity>
                {loading && <ActivityIndicator size={"large"} color={"red"}/>}
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
    logout:(user,email)=>dispatch(logout(user,email))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)