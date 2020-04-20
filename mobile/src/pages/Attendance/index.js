import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import MassageView from '../../components/MassageView';

export default function Attendance() {
    

    function navigateToSchedule() {};

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <MassageView title='Massagem Completa' price={150}/>

                <MassageView title='Massagem Pedras' price={100}/>

                <MassageView title='Massagem Relaxante' price={120}/>

                <MassageView title='Tratamento Celulite' price={100}/>

            </ScrollView>

                <TouchableOpacity 
                    style={styles.nextButton}
                    onPress={navigateToSchedule}
                >
                    <Text style={styles.nextText}>Avançar</Text>
                </TouchableOpacity>

        </View>
    );
};