import {StyleSheet} from 'react-native'
import {WP} from '../utilities/index'

const styles = StyleSheet.create({
    container:{
        marginTop:WP(10),
        marginHorizontal:WP(5),
        backgroundColor:'#e6e6e6',
        paddingBottom:WP(4),
        borderRadius:WP(5)
    },
    studImg:{
        width:WP(90),
        height:WP(57),
        resizeMode:'cover',
        borderRadius:WP(5),
        marginBottom:WP(5)
    },
    innerContainer:{
        flexDirection:'row',
        marginHorizontal:WP(2)
    },
    userImg:{
        width:WP(14),
        height:WP(14),
        borderRadius:WP(100)
    },
    usernameCont:{
        alignSelf:'center',
        left:WP(2)
    },
    usernameText:{
        fontWeight:'bold',
        fontSize:WP(4.5)
    },
    followIcon:{
        alignSelf:'center',
        marginLeft:WP(7),
        borderWidth:WP(0.5),
        borderColor:'purple',
        borderRadius:WP(4),
        paddingHorizontal:WP(4),
        paddingVertical:WP(1)
    },
    followText:{
        color:'purple'
    },
    cart:{
        resizeMode:'contain',
        height:WP(8),
        width:WP(11),
        marginLeft:WP(8),
        alignSelf:'center',
    },
    desc:{
        marginTop:WP(2),
        marginHorizontal:WP(2)
    },
    foot:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:WP(10)
    },
    footIcons:{
        height:WP(5),
        width:WP(6),
        resizeMode:'contain',
        marginTop:WP(8)
    }
})

export default styles