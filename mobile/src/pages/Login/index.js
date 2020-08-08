import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

import styles from './styles';

import titleImg from '../../assets/main.jpg';

// fix keyboard gets in front of input
export default function Login() {
    const navigation = useNavigation();
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    function navigateTofPass() {
        navigation.navigate('ForgotPassword');
    };
    async function navigateToAttendance() {
        let auth = await firebase.auth().signInWithEmailAndPassword(email, password).catch( e => {
            Alert.alert("Login Incorreto", e.message);
        });
        
        if (typeof auth != 'undefined') {
            navigation.navigate('Attendance', {
                email,
            });
        }
    };

    return (
        <View style={styles.container}>
            <Image source={titleImg} style={styles.image} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Spa&amp;Saude</Text>
                <Text style={styles.subtitle}>Terapia Antiestresse</Text>
            </View>
            <TextInput 
                style={styles.input}
                placeholder="E-mail" 
                placeholderTextColor='#777'
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                onChangeText={text => setEmail(text)} 
            />
            <TextInput 
                style={{ ...styles.input, marginTop: 20 }}
                placeholder="Senha" 
                placeholderTextColor='#777'
                autoCompleteType="password"
                textContentType="password"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)} 
            />

            <TouchableOpacity 
                style={styles.fPassLink}
                onPress={navigateTofPass}
            >
                <Text style={styles.fPassText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.entryButton}
                onPress={navigateToAttendance}
            >
                <Text style={styles.entryText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};
