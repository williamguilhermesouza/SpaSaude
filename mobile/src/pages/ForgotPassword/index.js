import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

import styles from './styles';

import titleImg from '../../assets/main.jpg';

// fix keyboard gets in front of input
export default function ForgotPassword() {
    const navigation = useNavigation();

    [email, setEmail] = useState('');

    function navigateToLogin() {
        firebase.auth().sendPasswordResetEmail(email).then( () => {
            Alert.alert("Sucesso", "E-mail de redefinição enviado!");
            navigation.navigate('Login');
        }).catch( (e) => {
            Alert.alert("Erro", `Erro ${e.message} ao redefinir senha`);
        });
    };

    return (
        <View style={styles.container}>
            <Image source={titleImg} style={styles.image} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Spa&amp;Saude</Text>
                <Text style={styles.subtitle}>Terapia Antiestresse</Text>
            </View>

            <TextInput 
                style={{ ...styles.input, marginTop: 20 }}
                placeholder="E-mail" 
                placeholderTextColor='#777'
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                onChangeText={text => setEmail(text)} 
            />

            <TouchableOpacity 
                style={styles.sendButton}
                onPress={navigateToLogin}
            >
                <Text style={styles.sendText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
};
