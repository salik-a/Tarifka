import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,

        alignItems: "center",
        backgroundColor: "azure",

    },
    image: {

        width: "100%",
        height: 300,
        //resizeMode: "contain",
    },
    header: {
        margin: 5,
        color: "chocolate",
        fontSize: 22,
    },
    title: {
        fontSize: 32,
        margin: 5,
        color: "chocolate"
    },
    text: {
        fontSize: 16
    },
    buttonText: {
        color: "white",
        fontSize: 18
    },
    button: {
        width: 250,
        alignItems: "center",
        backgroundColor: "tomato",
        padding: 10,
        borderRadius: 10
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 30
    },
    textContainer: {
        margin: 5
    },
    headerContainer: {
        borderBottomColor: "darkorange",
        borderBottomWidth: 1
    },
    titleContainer: {
        borderBottomColor: "darkorange",
        borderBottomWidth: 1,
    },


});