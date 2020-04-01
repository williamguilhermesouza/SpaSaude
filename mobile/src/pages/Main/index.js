import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import titleImg from '../../assets/main.jpg';

export default function Main() {
    const navigation = useNavigation();

    function navigateToFirstTime() {
        navigation.navigate('FirstTime');
    };
    return (
        <View style={styles.container}>
            <Image source={titleImg} style={styles.image} />
            <View style={styles.horizontalLine} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Spa&amp;Saude</Text>
                <Text style={styles.subtitle}>Terapia Antiestresse</Text>
            </View>
            <TouchableOpacity 
                style={styles.firstTimeButton}
                onPress={navigateToFirstTime}
            >
                <Text style={styles.firstTimeText}>Primeira Vez</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.toLoginButton}
                onPress={()=>{}}
            >
                <Text style={styles.toLoginText}>Já sou cliente</Text>
            </TouchableOpacity>
        </View>
    );
};