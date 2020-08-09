import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios'; 
import firebase from 'firebase';

import styles from './styles';

const api = axios.create({
    baseURL: 'https://us-central1-spa-saude.cloudfunctions.net/',
})


export default function Confirmation() {
    const navigation = useNavigation();

    const route = useRoute();
    const { email, date, payment, complete, stones, relax, celulite } = route.params;

    async function handleEmail() {
        
    /*
     * const to = ['larissatf@yahoo.com.br'];
        email(to, {
            subject: 'Reserva de Horário',
            body: `Olá, gostaria de reservar ${complete} Massagens Completas, ${stones} Massagem com Pedras, ${relax} Massagem Relaxante, e ${celulite} Tratamento
            para Celulite, para ${date.toString()}.`
        }).catch(console.error);
    */
        var name_rcv, address_rcv;

        let identifier = '';

        for (let i = 0; i < 4; i++) {
            identifier += email[i];
        }

        await firebase.database().ref('/users/' + identifier).once('value').then( snapshot => {
            name_rcv = snapshot.val().name;
            address_rcv = snapshot.val().address;
        });


        const response = await api.post('/sendEmail', {
            complete,
            stones,
            relax,
            celulite,
            date,
            email,
            name: name_rcv,
            address: address_rcv,
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
                    <Text style={styles.confirmationLi}>Pedras Quentes             &nbsp;</Text>
                    <Text style={styles.confirmationLi}>{stones}</Text>
                    <Text style={styles.confirmationLi}>R$ {stones * 100},00 </Text>
                </View>

                <View style={styles.confirmationList}>
                    <Text style={styles.confirmationLi}>Massagem Completa     &nbsp;</Text>
                    <Text style={styles.confirmationLi}>{complete}</Text>
                    <Text style={styles.confirmationLi}>R$ {complete * 150},00 </Text>
                </View>

                <View style={styles.confirmationList}>
                    <Text style={styles.confirmationLi}>Massagem Localizada    &nbsp;</Text>
                    <Text style={styles.confirmationLi}>{relax}</Text>
                    <Text style={styles.confirmationLi}>R$ {relax * 100},00 </Text>
                </View>

                <View style={styles.confirmationList}>
                    <Text style={styles.confirmationLi}>Tratamento para Celulite</Text>
                    <Text style={styles.confirmationLi}>{celulite}</Text>
                    <Text style={styles.confirmationLi}>R$ {celulite * 120},00 </Text>
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
