import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Confirmation() {
    const navigation = useNavigation();

    function navigateToThanks() {
        navigation.navigate('Thanks');
    };
    return (
        <View style={styles.container}>
            <View style={styles.confirmationBox}>
                <Text style={styles.confirmationTitle}>Itens Agendados</Text>

                <View style={styles.confirmationList}>
                    <Text style={styles.confirmationLi}>Massagem Relaxante</Text>
                    <Text style={styles.confirmationLi}>2</Text>
                    <Text style={styles.confirmationLi}>R$ 100,00 </Text>
                </View>

                <View style={styles.confirmationList}>
                    <Text style={styles.confirmationLi}>Massagem Relaxante</Text>
                    <Text style={styles.confirmationLi}>2</Text>
                    <Text style={styles.confirmationLi}>R$ 100,00 </Text>
                </View>

                <View style={styles.confirmationList}>
                    <Text style={styles.confirmationLi}>Massagem Relaxante</Text>
                    <Text style={styles.confirmationLi}>2</Text>
                    <Text style={styles.confirmationLi}>R$ 100,00 </Text>
                </View>

                <View style={styles.confirmationList}>
                    <Text style={styles.confirmationLi}>Massagem Relaxante</Text>
                    <Text style={styles.confirmationLi}>2</Text>
                    <Text style={styles.confirmationLi}>R$ 100,00 </Text>
                </View>

                <View style={styles.confirmationList}>
                    <Text style={styles.confirmationLi}>Massagem Relaxante</Text>
                    <Text style={styles.confirmationLi}>2</Text>
                    <Text style={styles.confirmationLi}>R$ 100,00 </Text>
                </View>
                
            </View>

            <TouchableOpacity 
                style={styles.confirmButton}
                onPress={navigateToThanks}
            >
                <Text style={styles.confirmText}>Avançar</Text>
            </TouchableOpacity>
        </View>
    );
};