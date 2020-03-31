import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

import titleImg from '../../assets/main.jpg';

export default function Main() {
    return (
        <View style={styles.container}>
            <Image source={titleImg} style={styles.image} />
            <View style={styles.horizontalLine} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Spa&amp;Saude</Text>
                <Text style={styles.subtitle}>Terapia Antiestresse</Text>
            </View>
            <TouchableOpacity style={styles.firstTimeButton}>
                <Text style={styles.firstTimeText}>Primeira Vez</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toLoginButton}>
                <Text style={styles.toLoginText}>Já sou cliente</Text>
            </TouchableOpacity>
        </View>
    );
};