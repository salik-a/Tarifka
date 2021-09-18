
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container2: {
        flex: 1,
        margin: 12,
        borderRadius: 10,
        backgroundColor: "#24282f",
        shadowColor: 'white',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 25

    },
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        marginHorizontal: 5,
        marginVertical: 5,
        borderBottomLeftRadius: 50,
        borderTopStartRadius: 45,
        borderWidth: 1,
        borderColor: "#aec4c7"
    },
    image: {
        marginHorizontal: 10,
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    titleContainer: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 20,
    }


});