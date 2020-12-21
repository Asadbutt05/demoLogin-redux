import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, FlatList} from 'react-native'
import {connect} from 'react-redux'
import {logout} from '../../store/actions/auth/auth'
import * as actions from '../../store/actions/index'
import styles from '../../styles/globalStyles'
import Header from '../../components/header'
import Card from '../../components/card'
import * as util from '../../utilities/index'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {user:{}, loading:false,url:false, country:false,apiImg:false}    
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
    setApiImage=()=>{
      if(!this.state.apiImg){
        this.setState({apiImg:this.props.apiImage},()=>console.log('TESTTTTTT',this.state.apiImg))
      }
    }

    render() {
      const {url, apiImg,country, user} = this.state
      // const temp1 = {borderWidth:2, borderColor:'#ff944d',borderRadius:8, marginTop:10,paddingVertical:4,
      //               marginHorizontal:20, alignSelf:'flex-start', paddingHorizontal:40, marginBottom:-2,
      //               borderBottomWidth:0, borderBottomEndRadius:0,borderBottomLeftRadius:0}
      // const temp2 = {borderWidth:2, paddingVertical:50,  marginHorizontal:20, marginTop:-4,
      //               borderRadius:8, borderColor:'#ff944d', borderTopStartRadius:0, borderTopEndRadius:5, borderTopWidth:0 }
      // const temp3 = {alignSelf:'center',marginHorizontal:20, borderTopWidth:2, marginLeft:140,
      //                paddingHorizontal:99, borderColor:'#ff944d', borderTopRightRadius:8, borderRightWidth:2,
      //               paddingVertical:2}
        return (

            <View style={styles.container}> 
              <Header navigation={this.props.navigation}/>
              {/* <View>
                <TouchableOpacity style={temp1}>
                  <Text style={{color:'#ff944d'}}>
                    Filters
                  </Text>
                </TouchableOpacity>
                <View style={temp3}>
                </View>
                <View style = {temp2}>
                </View>
              </View> */}

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

              <TouchableOpacity style={{marginTop:20, backgroundColor:'violet', width:150, alignSelf:'center'}} 
              onPress={()=>this.props.getApiImage()}>
                  <Text>GET IMAGE FROM API</Text>
              </TouchableOpacity>
              
              {this.props.country && <FlatList data={this.props.country}
                            renderItem={({item})=>(
                              <Text>{item}</Text>
                            )}/>}
              {this.props.apiImage && <Image source={{uri:this.props.apiImage}} style={{height:100,width:200, resizeMode:'contain'}} />}
              
            </View>

        )
    }
}

const mapStateToProps = (state)=>{
  console.log(state.apis.countryData, state.apis.apiImage);
  return{
    users:state.auth.users,
    country:state.apis.countryData,
    apiImage:state.apis.apiImage
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    logout:(user,email)=>dispatch(logout(user,email)),
    getCountry:()=>dispatch(actions.getCountry()),
    getApiImage:()=>dispatch(actions.getApiImage())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)