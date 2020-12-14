import React, { Component } from 'react'
import {View,Image, TouchableOpacity, } from 'react-native'
import styles from '../styles/header'

export default class header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
                    <Image source={require('../assets/menu.png')}
                        style={styles.drawerIcon}/>
                </TouchableOpacity>
                <Image style={styles.centerLogo} 
                    source={require('../assets/Icons-37.png')}/>
                <Image style={styles.cartLogo}
                    source={require('../assets/view_cart.png')}/>
            </View>
        )
    }
}
