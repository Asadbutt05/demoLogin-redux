import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1 
    },
    submit:{
            backgroundColor:'#0096cc',
            padding:10,
            borderRadius:8,
            marginTop:25,
            width:80,
            alignSelf:"center"
          },
    text:{
            marginTop:50,
            fontSize: 25,
            textAlign: 'center',
            marginBottom: 16,
        },
    name:{
            fontSize: 25,
            fontStyle:'italic',
            textAlign: 'center',
            marginBottom: 16,
            fontWeight:'bold'
        }
})
export default styles