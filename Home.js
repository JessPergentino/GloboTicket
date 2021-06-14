import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Menu from './Menu';

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.globologo}
                source={require("./images/globe.jpg")}
            />
            <Text style={styles.title}>Welcome TO GloboTicket</Text>
            <Text style={styles.subtitle}>{props.username}</Text>
            <Image
                style={styles.heroimage}
                source={require('./images/boxing.jpg')}
            />

            <View style={styles.textcontainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>

            <View style={styles.menu}>
                <Menu />
            </View>
        </View>
    );
}

const introText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum turpis bibendum pulvinar. Quisque sed sodales augue. Praesent a libero sit amet magna imperdiet congue. Fusce orci mi, ultricies sit amet urna ut, eleifend placerat turpis. Aenean elementum leo mauris, ac consectetur leo lobortis in. Etiam dignissim in odio nec viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1
    },
    textcontainer: {
        padding: 20,
    },
    globologo: {
        height: 100,
        width: 150,
    },
    title: {
        fontFamily: "Ubuntu-Regular",
    },
    subtitle: {
        paddingTop: 5,
        fontFamily: "Ubuntu-Regular",
    },
    content: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: "300"
    },
    heroimage: {
        height: 170,
        width: '100%'
    },
    menu: {
        position: 'absolute',
        bottom: 10
    }
})

export default Home;