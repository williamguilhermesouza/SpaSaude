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

            <Text style={styles.thanksLabel}>Obrigada!!!</Text>

            <TouchableOpacity 
                style={styles.newButton}
                onPress={navigateToAttendance}
            >
                <Text style={styles.newText}>Novo Agendamento</Text>
            </TouchableOpacity>
        </View>
    );
};
