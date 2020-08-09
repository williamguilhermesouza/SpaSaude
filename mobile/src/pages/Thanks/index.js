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
            <Text style={styles.thanksLabel}>Aguarde a confirmação do seu agendamento por email.</Text>
        </View>
    );
};
