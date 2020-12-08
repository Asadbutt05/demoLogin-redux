import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    input: {
        borderWidth : 2,
        marginTop:40,
        width:350,
        paddingVertical:10,
        borderRadius:8,
        paddingLeft:10,
        alignSelf:"center"
       
    },
    button:{
        alignSelf:'center',
        marginTop:40,
    },
    buttonText:{
        color:'red',
        textDecorationLine:'underline',
        fontSize:20
    },
    incorrect:{
        color:'red',
        alignSelf:'center',
    }
})

export default styles