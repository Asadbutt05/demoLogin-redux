import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import {connect} from 'react-redux'
import {logout} from '../../store/actions/auth/auth'
import styles from '../../styles/globalStyles'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {user:{}, loading:false}    
    }
    
    componentDidMount(){
        const user = this.props.users.find(user=>user.isLogged===true)
        this.setState({user:user})
      }

     render() {
      const {user, loading} = this.state
        return (
            <View style={styles.container}> 
                <Text style={styles.text}> Welcome to Home Screen</Text>
                <View style={styles.body}>  
                  <Text style={styles.name}>User: {user.username} </Text>
                  <Text style={styles.name}>Email: {user.email} </Text>
                  <Text style={styles.name}>Logged in: {user.isLogged && 'True'} </Text>
                </View>
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
)(Home)