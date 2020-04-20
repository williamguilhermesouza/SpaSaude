import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

export default function MassageView() {
    let [ expanded, setExpanded ] = useState(true);
    let [ animation ] = useState(new Animated.Value(300));


    function toggle() {
        let toValue;

        if (expanded) {
            toValue = 50;
        }
        else {
            toValue = 300;
        }

        setExpanded(!expanded);

        Animated.spring(animation, { toValue }).start();
    };

    return (
            <Animated.View style={{ ...styles.massageView, height: animation }}>

                <View style={styles.massageHeader}>
                    <Text style={styles.massageHeaderTitle}>Massagem Completa</Text>
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
                }

            </Animated.View>
    );
};