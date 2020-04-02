import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import titleImg from '../../assets/main.jpg';

// fix keyboard gets in front of input
export default function Login() {
    const navigation = useNavigation();

    function navigateTofPass() {};
    function navigateToAttendance() {
        navigation.navigate('Attendance');
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
                placeholder="Login" 
                placeholderTextColor='#777'
                onChangeText={() => {}} 
            />
            <TextInput 
                style={{ ...styles.input, marginTop: 20 }}
                placeholder="Senha" 
                placeholderTextColor='#777'
                onChangeText={() => {}} 
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