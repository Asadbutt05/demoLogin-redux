import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, FlatList} from 'react-native'
import {connect} from 'react-redux'
import {logout} from '../../store/actions/auth/auth'
import {getCountry} from '../../store/actions/country/country'
import styles from '../../styles/globalStyles'
import Header from '../../components/header'
import Card from '../../components/card'
import * as util from '../../utilities/index'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {user:{}, loading:false,url:false, country:false}    
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
    setCountry(){
      if(!this.state.country){
        this.setState({country:this.props.country}) 
      }
    }

    render() {
      const {url,country, user} = this.state
      //console.log(country, user);
        return (
            <View style={styles.container}> 
              <Header navigation={this.props.navigation}/>
              <Card />
              <TouchableOpacity style={{backgroundColor:'yellow', width:150, alignSelf:'center'}} 
              onPress={()=>this.getImage()}>
                  <Text>Select single picture</Text>
              </TouchableOpacity>
              {url && <Image source={{uri:url}} style={{height:100, width:100}}/>}
              
              <TouchableOpacity style={{marginTop:20, backgroundColor:'orange', width:150, alignSelf:'center'}} 
              onPress={()=>this.props.getCountry()}>
                  <Text>GET COUNTRY DATA</Text>
              </TouchableOpacity>
              
              {this.props.country && <FlatList data={this.props.country}
                            renderItem={({item})=>(
                              <Text>{item}</Text>
                            )}/>}
                
            </View>

        )
    }
}

const mapStateToProps = (state)=>{
  //console.log(state.country.countryData, state.auth.users);
  return{
    users:state.auth.users,
    country:state.country.countryData
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    logout:(user,email)=>dispatch(logout(user,email)),
    getCountry:()=>dispatch(getCountry())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)