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
                <MassageView benefits={['Relaxamento profundo', 'Aumento da drenagem linfática', 'Alívio de dores musculares', 'Diminuição do estresse e tensões', 'Melhora no fluxo da energia viral', 'Aumento do bem-estar']} title='Pedras Quentes' price={100} procedure='O terapeuta realiza uma suave massagem com a pedra aquecida, em seguida deixando-a na pele durante alguns minutos, em pontos específicos do corpo. O procedimento dura em média 30 minutos.' quantity={ (qtd) => setComplete(qtd)} />

                <MassageView benefits={['Diminuição da ansiedade e estresse', 'Alívio da tensão e dores musculares', 'Alívio das dores de cabeça', 'Diminuição do cansaço', 'Estimulação e equilíbrio do sistema intestinal', 'Diminuição das insônias']} title='Massagem Completa' price={150} procedure='A massagem completa dura em média 1 hora, inclui as técnicas de massagem corporal, bambuterapia, pedras quentes e Spa dos Pés.' quantity={ qtd => setStones(qtd)} />

                <MassageView benefits={['Relaxa as fibras musculares promovendo o alívio da dor', 'Proporciona relaxamento e bem-estar', 'Auxilia a drenagem de substâncias tóxicas', 'Ativa a circulação sanguínea']} title='Massagem Localizada' price={100} procedure='Esse procedimento é indicado para pacientes com tensão muscular e dor localizada, inclui técnicas de massagem, pedras quentes e pantalas.  O atendimento dura em média 30 minutos.' quantity={ qtd => setRelax(qtd)} />

                <MassageView benefits={['Redução de estrias e celulites', 'Desintoxicação do organismo', 'Melhora da circulação sanguínea', 'Eliminação de contraturas musculares e pontos gatilho', 'Fortalece os vasos sanguíneos']} title='Tratamento para celulite' price={120} procedure='O procedimento é realizado por área, de acordo com a preferência do paciente, inclui técnicas de ventosaterapia e pantalas. O atendimento dura em média 30 minutos.' quantity={ qtd => setCelulite(qtd)} />

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
