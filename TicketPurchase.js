import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import globkTickets from './TicketsDB';

const TicketPurchase = ({ route, navigation }) => {
    const [ticketQuantity, setTicketQuantity] = useState('1');
    const { ticketId } = route.params;
    const selectedEvent = globkTickets.find(tickets => tickets.eventID === ticketId);

    const purchase = () => {
        let price = selectedEvent.price * ticketQuantity;
        Alert.alert(`Your cost is ${price}`);
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{selectedEvent.event}</Text>
            <Image
                style={styles.tickectimage}
                source={selectedEvent.image}
            />
            <Text style={styles.shortdescription}>
                {selectedEvent.shortDescription}
            </Text>
            <Text style={styles.description}>
                {selectedEvent.description}
            </Text>

            <View style={styles.purchaserow}>
                <Text style={styles.shortdescription}>Quantity:</Text>
                <TextInput
                    style={styles.quantityinput}
                    onChangeText={quantity => setTicketQuantity(quantity)}
                    value={ticketQuantity}
                    selectTextOnFocus={true}
                    keyboardType="numeric"
                />
            </View>

            <Text style={styles.price}>
                Total Price: {selectedEvent.price * ticketQuantity}
            </Text>

            <TouchableOpacity
                onPress={purchase}
                style={styles.button}
            >
                <Text style={styles.buttontext}>Buy Now</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 10
    },
    title: {
        fontFamily: "Ubuntu-Regular",
        paddingBottom: 10
    },
    tickectimage: {
        width: "100%",
        height: 180
    },
    shortdescription: {
        fontFamily: "Ubuntu-Regular",
        paddingTop: 5,
        textAlignVertical: "center"
    },
    description: {
        textAlign: "left",
        fontFamily: "Ubuntu-Light",
        fontWeight: '600',
        padding: 10
    },
    purchaserow: {
        flexDirection: "row"
    },
    quantityinput: {
        borderWidth: 1,
        fontFamily: "Ubuntu-Regular",
        height: 38,
        width: 40,
        marginLeft: 25
    },
    price: {
        fontFamily: "Ubuntu-Regular",
        paddingTop: 5,
        paddingBottom: 10
    },
    button: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: "60%"
    },
    buttontext: {
        fontFamily: "Ubuntu-Regular",
        textAlign: "center",
        padding: 5
    }
});

export default TicketPurchase;