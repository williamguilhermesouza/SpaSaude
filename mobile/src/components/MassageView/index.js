import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

export default function MassageView(props) {
    let [ expanded, setExpanded ] = useState(false);
    let [ animation ] = useState(new Animated.Value(50));
    let [ quantity, setQuantity ] = useState(0);

    function toggle() {
        let toValue;

        if (expanded) {
            toValue = 50;
        }
        else {
            toValue = 400;
        }

        setExpanded(!expanded);

        Animated.spring(animation, { toValue }).start();
    };


    return (
            <Animated.View style={{ ...styles.massageView, height: animation }}>

                <View style={styles.massageHeader}>
                    <Text style={styles.massageHeaderTitle}>{props.title}</Text>
                    <TouchableOpacity
                        style={styles.expandCollapseButton}
                        onPress={toggle}
                    >
                        <AntDesign name={expanded? 'up' : 'down'} size={20} color='black' />
                    </TouchableOpacity>
                </View>

                { expanded &&
                    <View style={styles.massageList}>
                        <Text style={styles.massageListTitle}>Pedras Quentes</Text>
                        <Text>&#9679; Aumento da circulação sanguínea;</Text>
                        <Text>&#9679; Relaxamento profundo;</Text>
                        <Text>&#9679; Aumento da drenagem linfática;</Text>
                        <Text>&#9679; Alívio das dores musculares;</Text>
                        <Text>&#9679; Diminuição do estresse e tensões;</Text>
                        <Text>&#9679; Aumento do bem estar;</Text>
                    </View>
                }
                    
                { expanded &&
                    <View style={styles.massageListFooter}>
                        <TouchableOpacity onPress={ () => quantity > 0? setQuantity(quantity - 1) : Alert.alert('Erro', 'Quantidade mínima') } >
                            <Text style={styles.opsText}> - </Text>
                        </TouchableOpacity>

                        <Text style={styles.opsText}> {quantity} </Text>

                        <TouchableOpacity onPress={ () => quantity < 9? setQuantity(quantity + 1) : Alert.alert('Erro', 'Quantidade máxima') } >
                            <Text style={styles.opsText}> + </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.addButton} onPress={ props.quantity(quantity) }>
                            <Text style={styles.addButtonText}> Adicionar R$ {props.price * quantity},00 </Text>
                        </TouchableOpacity>
                    </View> 
                }

            </Animated.View>
    );
};
