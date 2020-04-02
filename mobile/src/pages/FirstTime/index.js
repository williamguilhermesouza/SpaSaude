import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';

export default function FirstTime() {
    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login');
    };

    return (
    <View style={styles.container}>
        <TextInput 
            style={styles.input}
            placeholder="Nome" 
            onChangeText={() => {}} 
        />

        <View style={styles.doubleInput}>
            <TextInput 
                style={styles.doubleInputInput}
                placeholder="Idade" 
                onChangeText={() => {}} 
            />
            <TextInput 
                style={styles.doubleInputInput}
                placeholder="Sexo" 
                onChangeText={() => {}} 
            />
        </View>
        
        <TextInput
            style={styles.input} 
            placeholder="CPF" 
            onChangeText={() => {}} 
        />
        <TextInput
            style={styles.input} 
            placeholder="E-mail" 
            onChangeText={() => {}} 
        />
        <TextInput
            style={styles.input} 
            placeholder="Telefone" 
            onChangeText={() => {}} 
        />
        <TextInput 
            style={styles.input} 
            placeholder="Endereço" 
            onChangeText={() => {}} 
        />

        <View style={styles.doubleInput}>
            <TextInput
                style={styles.doubleInputInput} 
                placeholder="Número" 
                onChangeText={() => {}} 
            />
            <TextInput
                style={styles.doubleInputInput} 
                placeholder="Bairro" 
                onChangeText={() => {}} 
            />
        </View>

        <View style={styles.doubleInput}>
            <TextInput 
                style={styles.doubleInputInput} 
                placeholder="Cidade" 
                onChangeText={() => {}} 
            />
            <TextInput 
                style={styles.doubleInputInput} 
                placeholder="UF" 
                onChangeText={() => {}} 
            />
        </View>

        <TextInput 
            style={styles.input} 
            placeholder="Complemento" 
            onChangeText={() => {}} 
        />
        <TextInput 
            style={styles.input} 
            placeholder="Usuário" 
            onChangeText={() => {}} 
        />
        <TextInput 
            style={styles.input} 
            placeholder="Senha" 
            onChangeText={() => {}} 
        />
        <TextInput 
            style={styles.input} 
            placeholder="Confirme sua Senha" 
            onChangeText={() => {}} 
        />

        <TouchableOpacity 
            style={styles.avancarButton}
            onPress={navigateToLogin}
        >
            <Text style={styles.avancarText}>Avançar</Text>
        </TouchableOpacity>
    </View>
    );
};