import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';


const Home = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.globologo}
                source={require("./images/globe.jpg")}
            />
            <Text style={styles.title}>Welcome TO GloboTicket</Text>
            <Text style={styles.subtitle}>{props.username}</Text>

            <View style={styles.textcontainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>
        </View>
    );
}

const introText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum turpis bibendum pulvinar. Quisque sed sodales augue. Praesent a libero sit amet magna imperdiet congue. Fusce orci mi, ultricies sit amet urna ut, eleifend placerat turpis. Aenean elementum leo mauris, ac consectetur leo lobortis in. Etiam dignissim in odio nec viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod erat non augue faucibus, tincidunt fringilla mauris volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer velit velit, malesuada vitae cursus id, tempus eu erat. Sed vestibulum ligula sapien, a sollicitudin lorem ullamcorper sed. Praesent fringilla elit orci.`

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
    },
    textcontainer: {
        textAlign: "center",
        paddingTop: 10,
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
    }
})

export default Home;