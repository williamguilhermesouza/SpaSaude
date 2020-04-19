import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import styles from './styles';

export default function Attendance() {

    function navigateToSchedule() {};
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.massageOpacity}
                onPress={() => {}}    
            >
                <Text style={styles.massageOpacityTitle}>Massagem Completa</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.nextButton}
                onPress={navigateToSchedule}
            >
                <Text style={styles.nextText}>Avançar</Text>
            </TouchableOpacity>
        </View>
    );
};