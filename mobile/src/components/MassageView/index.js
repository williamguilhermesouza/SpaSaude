import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Alert, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

export default function MassageView(props) {
    let [ expanded, setExpanded ] = useState(false);
    let [ animation ] = useState(new Animated.Value(50));
    let [ quantity, setQuantity ] = useState(0);
    let benefits_list = [];
    let windowHeight = Dimensions.get('window').height;

    function toggle() {
        let toValue;

        if (expanded) {
            toValue = 50;
        }
        else {
            toValue = 500  - windowHeight ;
        }

        setExpanded(!expanded);

        Animated.spring(animation, { toValue }).start();
    };

    for (const [index, benefit] of props.benefits.entries()) {
        benefits_list.push(<Text key={index}>&#9679;{benefit} ;</Text>);
    }


    return (
            <Animated.View style={{ ...styles.massageView, height: animation }}>

                <TouchableOpacity 
                    onPress={toggle}
                    style={styles.massageHeader}
                >
                        <Text style={styles.massageHeaderTitle}>{props.title}</Text>
                        <TouchableOpacity
                            style={styles.expandCollapseButton}
                            onPress={toggle}
                        >
                            <AntDesign name={expanded? 'up' : 'down'} size={20} color='black' />
                        </TouchableOpacity>
                </TouchableOpacity>

                { expanded &&
                    <View style={styles.massageList}>
                        <Text style={styles.massageListTitle}>Procedimento:</Text>
                        <Text>{props.procedure}</Text>
                    </View>
                }

                { expanded &&
                    <View style={styles.massageList}>
                        <Text style={styles.massageListTitle}>Benefícios:</Text>
                        {benefits_list}
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
