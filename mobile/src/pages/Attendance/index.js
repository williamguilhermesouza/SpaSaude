import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import MassageView from '../../components/MassageView';

export default function Attendance() {
    

    function navigateToSchedule() {};

    return (
        <View style={styles.container}>
            <MassageView />

            <TouchableOpacity 
                style={styles.nextButton}
                onPress={navigateToSchedule}
            >
                <Text style={styles.nextText}>Avançar</Text>
            </TouchableOpacity>

        </View>
    );
};