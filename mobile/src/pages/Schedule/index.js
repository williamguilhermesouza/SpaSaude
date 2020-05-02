import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import SegmentedControl from '@react-native-community/segmented-control';


import styles from './styles';

export default function Schedule() {
    const navigation = useNavigation();
    let [payment, setPayment] = useState('Dinheiro');
    let [date, setDate] = useState(Date.now());
    let [mode, setMode] = useState('date');
    let [show, setShow] = useState(false);

    function calendarChangeHandler(event, selectedDate) {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    function showCalendar(currentMode) {
        setShow(true);
        setMode(currentMode);
    };

    function navigateToConfirmation() {
        navigation.navigate('Confirmation');
    };

    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.pickerButton}
                onPress={() => showCalendar('date')}
            >
                <Text style={styles.pickerButtonText}>Data</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.pickerButton}
                onPress={() => showCalendar('time')}
            >
                <Text style={styles.pickerButtonText}>Horários Disponíveis</Text>
            </TouchableOpacity>

            {show &&
                <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='spinner'
                    onChange={calendarChangeHandler}
                />
            }

            <View style={styles.paymentSelector}>
                <Text style={styles.paymentLabel}>Forma de Pagamento</Text>
                <SegmentedControl  
                    selectedIndex={payment}
                    backgroundColor='pink'
                    values={['Dinheiro', 'Débito', 'Crédito']}
                    onChange={ (event) => { setPayment(event.nativeEvent.selectedSegmentIndex); }}
                />
            </View>

            <TouchableOpacity 
                style={styles.nextButton}
                onPress={navigateToConfirmation}
            >
                <Text style={styles.nextText}>Avançar</Text>
            </TouchableOpacity>
        </View>
    );
};