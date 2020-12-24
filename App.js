import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import styles from "./style/style";

import logo from "./assets/favicon.png";

export default function App() {
    let email = useState(0);

    function login() {
        Alert.alert("selamat datang");
    }

    return (
        <View style={styles.container}>
            {/* logo section */}
            <View style={{ alignItems: "center", marginTop: 50 }}>
                <Image source={logo} style={styles.logo} />
            </View>

            {/* hero text */}
            <View style={{ marginTop: 50 }}>
                <View>
                    <Text style={styles.title}>Let's sign you in</Text>
                </View>
                <View style={{ marginTop: 5 }}>
                    <Text style={styles.text}>
                        we always have a cup of hot tea and {"\n"}a warm
                        blanket.
                    </Text>
                </View>
            </View>

            {/* input field */}
            <View style={{ marginTop: 20 }}>
                <View style={styles.formGroup}>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.formControl}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text>Password</Text>
                    <TextInput style={styles.formControl} />
                </View>
                {/* sign in button */}
                <View style={styles.formGroup}>
                    <TouchableOpacity
                        style={styles.buttonPrimary}
                        onPress={login}
                    >
                        <Text style={styles.buttonPrimaryText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* create a new account */}
            <View>
                <Text style={styles.textPrimary}>
                    Don't have an account ? Sign Up here
                </Text>
            </View>
        </View>
    );
}
