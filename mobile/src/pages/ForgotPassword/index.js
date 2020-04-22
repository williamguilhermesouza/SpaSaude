import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import titleImg from '../../assets/main.jpg';

// fix keyboard gets in front of input
export default function ForgotPassword() {
    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login');
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
                onChangeText={() => {}} 
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