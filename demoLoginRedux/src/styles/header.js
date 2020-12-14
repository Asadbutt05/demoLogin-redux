import {StyleSheet} from "react-native"
import {WP} from '../utilities/index'

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:WP(5),
        marginTop:WP(5)
    },
    drawerIcon:{
        height:WP(10),
        width:WP(8),
        alignSelf:'center',
        resizeMode:'contain',
    },
    centerLogo:{
        height:WP(10),
        width:WP(40),
        alignSelf:'center',
        resizeMode:'contain'
    },
    cartLogo:{
        height:WP(10),
        width:WP(10),
        alignSelf:'center',
        resizeMode:'contain'
    }
})

export default styles