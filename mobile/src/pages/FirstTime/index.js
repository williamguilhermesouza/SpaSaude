import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from 'firebase';

import styles from './styles';

export default function FirstTime() {
    const navigation = useNavigation();

    let [name, setName] = useState('');
    let [age, setAge] = useState(0);
    let [sex, setSex] = useState('');
    let [cpf, setCpf] = useState('');
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState('');
    let [address, setAddress] = useState('');
    let [anumber, setANumber] = useState(0);
    let [anbh, setAnbh] = useState('');
    let [acity, setACity] = useState('');
    let [astate, setAState] = useState('');
    let [acomp, setAComp] = useState('');
    let [pass, setPass] = useState('');
    let [passConf, setPassConf] = useState('');


    async function navigateToLogin() {
        let auth = await firebase.auth().createUserWithEmailAndPassword(email, pass).catch( (e) => {
           Alert.alert(
               "Erro ao criar",
               e.message,
           );

        });

        if (pass != passConf) {
            Alert.alert("Erro", "Senha e Confirme sua senha devem ser iguais");
            return;
        }

        if ( typeof auth != 'undefined') {
            firebase.database().ref('users/' + name).set({
                'name': name,
                'age': age,
                'sex': sex,
                'cpf': cpf,
                'email': email,
                'phone': phone,
                'address': address,
                'anumber': anumber,
                'anbh': anbh,
                'acity': acity,
                'astate': astate,
                'acomp': acomp,
            }).catch( e => {
                Alert.alert(
                    "Valor inválido",
                    e.message,
                );
            });

            navigation.navigate('Login');
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <TextInput 
                style={styles.input}
                placeholder="Nome" 
                onChangeText={text => setName(text)} 
            />

            <View style={styles.doubleInput}>
                <TextInput 
                    style={styles.doubleInputInput}
                    placeholder="Idade" 
                    onChangeText={text => setAge(text)} 
                />
                <TextInput 
                    style={styles.doubleInputInput}
                    placeholder="Sexo" 
                    onChangeText={text => setSex(text)}
                />
            </View>
            
            <TextInput
                style={styles.input} 
                placeholder="CPF" 
                onChangeText={text => setCpf(text)}
            />
            <TextInput
                style={styles.input} 
                placeholder="E-mail" 
                onChangeText={text => setEmail(text)} 
            />
            <TextInput
                style={styles.input} 
                placeholder="Telefone" 
                onChangeText={text => setPhone(text)}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Endereço" 
                onChangeText={text => setAddress(text)}
            />

            <View style={styles.doubleInput}>
                <TextInput
                    style={styles.doubleInputInput} 
                    placeholder="Número" 
                    onChangeText={text => setANumber(text)}
                />
                <TextInput
                    style={styles.doubleInputInput} 
                    placeholder="Bairro" 
                    onChangeText={text => setAnbh(text)}
                />
            </View>

            <View style={styles.doubleInput}>
                <TextInput 
                    style={styles.doubleInputInput} 
                    placeholder="Cidade" 
                    onChangeText={text => setACity(text)} 
                />
                <TextInput 
                    style={styles.doubleInputInput} 
                    placeholder="UF" 
                    onChangeText={text => setAState(text)} 
                />
            </View>

            <TextInput 
                style={styles.input} 
                placeholder="Complemento" 
                onChangeText={text => setAComp(text)} 
            />
            <TextInput 
                style={styles.input} 
                secureTextEntry={true}
                placeholder="Senha" 
                onChangeText={text => setPassConf(text)} 
            />
            <TextInput 
                style={styles.input} 
                secureTextEntry={true}
                placeholder="Confirme sua Senha" 
                onChangeText={text => { text == passConf ? setPass(text) : console.log("Different") }} 
            />

            <TouchableOpacity 
                style={styles.avancarButton}
                onPress={navigateToLogin}
            >
                <Text style={styles.avancarText}>Avançar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};
