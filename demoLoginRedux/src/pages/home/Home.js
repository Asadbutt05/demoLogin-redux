import React, { Component } from 'react'
import { Text, View, Button} from 'react-native'
import {connect} from 'react-redux'
import {logout} from '../../store/actions/auth/auth'
import styles from '../../styles/globalStyles'
import Header from '../../components/header'
import Card from '../../components/card'

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
      const {user} = this.state
        return (
            <View style={styles.container}> 
              <Header navigation={this.props.navigation}/>
              <Card />
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