import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/card'

export default class card extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/stub-image.png')} 
                    style={styles.studImg}/>
                    <View style={styles.innerContainer}>
                        <Image source={require('../assets/yui.jpg')}
                            style={styles.userImg}/>
                        <View style={styles.usernameCont}> 
                            <Text style={styles.usernameText}>Yui Hirasawa</Text>
                            <Text>1h</Text>
                        </View>
                        <TouchableOpacity style={styles.followIcon}>
                            <Text style={styles.followText}>
                                Follow
                            </Text>
                        </TouchableOpacity>
                        <Image source={require('../assets/cart.png')}
                            style={styles.cart}/>
                    </View>
                    <Text style={styles.desc}>
                        There will be description here in which the user will explain his post or
                        write whatever he wants
                    </Text>
                    <View style={styles.foot}>
                        <Image source={require('../assets/like.png')} style={styles.footIcons}/>
                        <Image source={require('../assets/comment.png')} style={styles.footIcons}/>
                        <Image source={require('../assets/share_post.png')} style={styles.footIcons}/>
                    </View>
            </View>
        )
    }
}
