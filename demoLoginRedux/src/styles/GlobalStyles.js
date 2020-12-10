import {StyleSheet} from "react-native"
import {WP} from '../utilities/index'
const styles = StyleSheet.create({
    container:{
        flex: 1 
    },
    body:{
        marginTop:WP(10)
    },
    submit:{
            backgroundColor:'#0096cc',
            padding:WP(4),
            borderRadius:WP(3),
            marginTop:WP(8),
            width:WP(25),
            alignSelf:"center"
          },
    text:{
            marginTop:50,
            fontSize: WP(12),
            textAlign: 'center',
        },
    name:{
            fontSize: WP(7),
            fontStyle:'italic',
            marginLeft:WP(10),
            fontWeight:'bold'
        },
    log:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:WP(4)
    },
    signup:{
        fontSize:WP(7),
        marginTop:WP(15),
        textAlign:'center'
    }
})
export default styles