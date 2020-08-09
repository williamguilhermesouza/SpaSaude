import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';

export default function Schedule() {
    const navigation = useNavigation();

    function navigateToAttendance() {
        navigation.navigate('Attendance');
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.thanksLabel}>Você receberá um email da especialista confirmando seu atendimento.</Text>
            <Text style={styles.thanksLabel2}>Spa&Saude agradece seu contato.</Text>
        </View>
    );
};
