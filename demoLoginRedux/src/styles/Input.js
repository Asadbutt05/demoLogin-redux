import {StyleSheet} from "react-native"
import {WP} from '../utilities/index'

const styles = StyleSheet.create({
    input: {
        borderWidth : WP(0.7),
        marginTop:WP(10),
        width:WP(80),
        paddingVertical:WP(2),
        borderRadius:WP(2),
        paddingLeft:WP(3),
        alignSelf:"center"    
    },
    button:{
        alignSelf:'center',
        marginTop:WP(10),
    },
    buttonText:{
        color:'red',
        textDecorationLine:'underline',
        fontSize:WP(6)
    },
    incorrect:{
        color:'red',
        alignSelf:'center',
    }
})

export default styles