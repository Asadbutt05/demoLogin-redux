//import ImagePicker2 from "react-native-image-crop-picker";
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image} from 'react-native'
import {connect} from 'react-redux'
import {logout} from '../../store/actions/auth/auth'
import styles from '../../styles/globalStyles'
import Header from '../../components/header'
import Card from '../../components/card'
import * as util from '../../utilities/index'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {user:{}, loading:false,url:false}    
    }
    
    componentDidMount(){
        const curUser = this.props.users.find(user=>user.isLogged===true)
        this.setState({user:curUser})
      }

    getImage(){
      util.singlePictureSelect((image)=>{
        this.setState({url:image.path})
      })
    }

    render() {
      const {url} = this.state
      console.log(url);
        return (
            <View style={styles.container}> 
              <Header navigation={this.props.navigation}/>
              <Card />
              <TouchableOpacity style={{backgroundColor:'yellow', width:150, alignSelf:'center'}} 
              onPress={()=>this.getImage()}>
                  <Text>Select single picture</Text>
              </TouchableOpacity>
              
              {url && <Image source={{uri:url}} style={{height:100, width:100}}/>}
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