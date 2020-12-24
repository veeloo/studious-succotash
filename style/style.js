import { StyleSheet } from "react-native";

const color = {
    white: "white",
    black: "#050406",
    grey: "#bbbbbb",
    primaryColor: "#313FB0",
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 20,
    },
    logo: {
        width: 60,
        height: 60,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: color.primaryColor,
    },
    text: {
        fontSize: 16,
        lineHeight: 25,
        color: color.grey,
    },
    textPrimary: {
        color: color.primaryColor,
    },
    formGroup: {
        marginBottom: 15,
    },
    formControl: {
        borderWidth: 1,
        height: 40,
        borderRadius: 5,
        marginTop: 10,
        paddingHorizontal: 15,
    },
    buttonPrimary: {
        backgroundColor: color.primaryColor,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    buttonPrimaryText: {
        color: color.white,
    },
    buttonOutlinePrimary: {
        borderColor: color.primaryColor,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
});

export default styles;
