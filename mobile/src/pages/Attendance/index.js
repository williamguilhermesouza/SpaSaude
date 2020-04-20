import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';


import styles from './styles';

export default function Attendance() {
    [ expand, setExpand ] = useState(false);

    function navigateToSchedule() {};

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.massageExpandOpacity}
                onPress={() => {}}    
            >
                <Text style={styles.massageOpacityTitle}>Massagem Completa</Text>

                <View style={styles.massageList}>
                    <Text style={styles.massageListTitle}>Pedras Quentes</Text>
                    <Text>&#9679; Aumento da circulação sanguínea;</Text>
                    <Text>&#9679; Relaxamento profundo;</Text>
                    <Text>&#9679; Aumento da drenagem linfática;</Text>
                    <Text>&#9679; Alívio das dores musculares;</Text>
                    <Text>&#9679; Diminuição do estresse e tensões;</Text>
                    <Text>&#9679; Aumento do bem estar;</Text>
                </View>

                <View style={styles.massageListFooter}>
                    <TouchableOpacity>
                        <Text style={styles.opsText}> - </Text>
                    </TouchableOpacity>

                    <Text style={styles.opsText}> 0 </Text>

                    <TouchableOpacity>
                        <Text style={styles.opsText}> + </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}> Adicionar R$ 150,00 </Text>
                    </TouchableOpacity>
                </View> 

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