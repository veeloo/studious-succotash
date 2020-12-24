import React from "react";
import { Text, View } from "react-native";
import styles from "./../style/style";

export default function Header() {
    return (
        <View style={styles.container}>
            <Text>Todo App</Text>
        </View>
    );
}
