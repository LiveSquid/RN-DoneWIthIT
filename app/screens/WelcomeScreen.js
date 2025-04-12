import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            // resizeMode = 'contain'
            style = {styles.background}
            source = {require('../assets/background.jpg')}
        >
            <View style = {styles.loginButton}></View>
            <View style = {styles.signUpButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    loginButton : {
        width: '100%',
        height: 70,
        backgroundColor: 'dodgerblue',
    },
    signUpButton : {
        width: '100%',
        height: 70,
        backgroundColor: 'red',
    },
})


export default WelcomeScreen;