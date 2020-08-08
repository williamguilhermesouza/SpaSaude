import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import MassageView from '../../components/MassageView';

export default function Attendance() {
    const navigation = useNavigation();
    const route = useRoute();
    const { email } = route.params;

    let [complete, setComplete] = useState(0);
    let [stones, setStones] = useState(0);
    let [relax, setRelax] = useState(0);
    let [celulite, setCelulite] = useState(0);
    

    function navigateToSchedule() {
        navigation.navigate('Schedule', {
            complete,
            stones,
            relax,
            celulite,
            email,
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <MassageView title='Massagem Completa' price={150} quantity={ (qtd) => setComplete(qtd)} />

                <MassageView title='Massagem Pedras' price={100} quantity={ qtd => setStones(qtd)} />

                <MassageView title='Massagem Relaxante' price={120} quantity={ qtd => setRelax(qtd)} />

                <MassageView title='Tratamento Celulite' price={100} quantity={ qtd => setCelulite(qtd)} />

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
