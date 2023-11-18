import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import logo from '../assets/Logo.png';

const introScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Image source={logo} style={styles.innerimg} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '60%',
    },
    innerimg: {
        width: 450,
        height: 450,
    }
})

export default introScreen;