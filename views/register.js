import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
} from "react-native";

import logo from "./../assets/favicon.png";

import styles from "./../style/style";

export default function Login({ navigation }) {
    // ! d:Github/school-website/backend
    const endpoint = "http://192.168.1.8:8000/api/login";

    const navigateToLogin = () => {
        navigation.navigate("Login");
    };

    const [Nisn, setNisn] = useState(0);
    const [Nama, setNama] = useState("");
    const [Kelas, setKelas] = useState("");
    const [Jurusan, setJurusan] = useState("");
    const [Alamat, setAlamat] = useState("");
    const [Email, setEmail] = useState("");
    const [Telp, setTelp] = useState(0);
    const [Password, setPassword] = useState("");
    const [Angkatan, setAngkatan] = useState(0);
    const [Status, setStatus] = useState("");
    const [Aktif, setAktif] = useState("");

    const signUp = () => {
        const fd = new FormData();
        fd.append("nisn", Nisn);
        fd.append("nama", Nama);
        fd.append("kelas", Kelas);
        fd.append("jurusan", Jurusan);
        fd.append("alamat", Alamat);
        fd.append("telp", Telp);
        fd.append("email", Email);
        fd.append("password", Password);
        fd.append("angkatan", Angkatan);
        fd.append("status", Status);
        fd.append("aktif", Aktif);

        fetch(endpoint, {
            method: "post",
            body: fd,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <ScrollView>
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
                            <Text>Nisn</Text>
                            <TextInput
                                style={styles.formControl}
                                keyboardType="number-pad"
                                onChangeText={(val) => setNisn(val)}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text>Nama</Text>
                            <TextInput
                                style={styles.formControl}
                                onChangeText={(val) => setNama(val)}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text>Kelas</Text>
                            <TextInput
                                style={styles.formControl}
                                onChangeText={(val) => setKelas(val)}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text>Jurusan</Text>
                            <TextInput
                                style={styles.formControl}
                                onChangeText={(val) => setJurusan(val)}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text>Alamat</Text>
                            <TextInput
                                style={styles.formControl}
                                onChangeText={(val) => setAlamat(val)}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text>Telp</Text>
                            <TextInput
                                style={styles.formControl}
                                onChangeText={(val) => setTelp(val)}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text>Email</Text>
                            <TextInput
                                keyboardType="email-address"
                                style={styles.formControl}
                                onChangeText={(val) => setEmail(val)}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text>Password</Text>
                            <TextInput
                                style={styles.formControl}
                                onChangeText={(val) => setPassword(val)}
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text>Angkatan</Text>
                            <TextInput
                                style={styles.formControl}
                                onChangeText={(val) => setAngkatan(val)}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text>Status</Text>
                            <TextInput
                                style={styles.formControl}
                                onChangeText={(val) => setStatus(val)}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text>Aktif</Text>
                            <TextInput
                                style={styles.formControl}
                                onChangeText={(val) => setAktif(val)}
                            />
                        </View>
                        {/* sign up button */}
                        <View style={styles.formGroup}>
                            <TouchableOpacity
                                style={styles.buttonPrimary}
                                onPress={signUp}
                            >
                                <Text style={styles.buttonPrimaryText}>
                                    Sign In
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* create a new account */}
                    <View>
                        <Text style={styles.link} onPress={navigateToLogin}>
                            Already have an account, Sign In now
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}
