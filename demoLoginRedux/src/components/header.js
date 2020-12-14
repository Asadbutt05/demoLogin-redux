import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../styles/globalStyles'

export default class header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Icon name='filter-sharp'size={40} 
            onPress={()=>this.props.navigation.openDrawer()}
            style={styles.drawer}/>
        )
    }
}
