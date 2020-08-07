import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios'; 

import styles from './styles';

const api = axios.create({
    baseURL: 'https://us-central1-spa-saude.cloudfunctions.net/',
})


export default function Confirmation() {
    const navigation = useNavigation();

    const route = useRoute();
    const { date, payment, complete, stones, relax, celulite } = route.params;

    async function handleEmail() {
        
    /*
     * const to = ['larissatf@yahoo.com.br'];
        email(to, {
            subject: 'Reserva de Horário',
            body: `Olá, gostaria de reservar ${complete} Massagens Completas, ${stones} Massagem com Pedras, ${relax} Massagem Relaxante, e ${celulite} Tratamento
            para Celulite, para ${date.toString()}.`
        }).catch(console.error);
    */

        const response = await api.post('/sendEmail', {
           complete: complete,
           stones: stones,
           relax: relax,
           celulite: celulite,
           date: date,
        });
    }

    function navigateToThanks() {
        handleEmail();
        navigation.navigate('Thanks');
    };
    return (
        <View style={styles.container}>
            <View style={styles.confirmationBox}>
                <Text style={styles.confirmationTitle}>Itens Agendados</Text>

                <View style={styles.confirmationList}>
                    <Text style={styles.confirmationLi}>Massagem Completa</Text>
                    <Text style={styles.confirmationLi}>{complete}</Text>
                    <Text style={styles.confirmationLi}>R$ {complete * 150},00 </Text>
                </View>

                <View style={styles.confirmationList}>
                    <Text style={styles.confirmationLi}>Massagem Pedras</Text>
                    <Text style={styles.confirmationLi}>{stones}</Text>
                    <Text style={styles.confirmationLi}>R$ {stones * 100},00 </Text>
                </View>

                <View style={styles.confirmationList}>
                    <Text style={styles.confirmationLi}>Massagem Relaxante</Text>
                    <Text style={styles.confirmationLi}>{relax}</Text>
                    <Text style={styles.confirmationLi}>R$ {relax * 120},00 </Text>
                </View>

                <View style={styles.confirmationList}>
                    <Text style={styles.confirmationLi}>Massagem Celulite</Text>
                    <Text style={styles.confirmationLi}>{celulite}</Text>
                    <Text style={styles.confirmationLi}>R$ {celulite * 100},00 </Text>
                </View>

            </View>

            <TouchableOpacity 
                style={styles.confirmButton}
                onPress={navigateToThanks}
            >
                <Text style={styles.confirmText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    );
};
