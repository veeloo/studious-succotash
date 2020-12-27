import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

import logo from "./../assets/favicon.png";

import styles from "./../style/style";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // ! d:Github/school-website/backend
    const endpoint = "http://192.168.1.8:8000/api/login";

    const signIn = () => {
        const fd = new FormData();
        fd.append("email", email);
        fd.append("password", password);

        fetch(endpoint, {
            method: "post",
            body: fd,
        })
            .then((res) => res.json())
            .then((data) => {
                alert(data.msg);
            })
            .catch((err) => {
                console.log(err);
                alert(err.message);
            });
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.container}>
                {/* logo section */}
                <View style={{ alignItems: "center", marginTop: 50 }}>
                    <Image source={logo} style={styles.logo} />
                </View>

                {/* hero text */}
                <View style={{ marginTop: 50 }}>
                    <View>
                        <Text style={styles.title}>Register </Text>
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
                            placeholder="e.g studious.succotash@gmail.com"
                            onChangeText={(val) => setEmail(val)}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text>Password</Text>
                        <TextInput
                            style={styles.formControl}
                            secureTextEntry={true}
                            placeholder="this one is secreat sttt..."
                            onChangeText={(val) => setPassword(val)}
                        />
                    </View>
                    {/* sign in button */}
                    <View style={styles.formGroup}>
                        <TouchableOpacity
                            style={styles.buttonPrimary}
                            onPress={signIn}
                        >
                            <Text style={styles.buttonPrimaryText}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* create a new account */}
                <View>
                    <Text style={styles.link}>
                        Don't have an account ? Sign Up here
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
