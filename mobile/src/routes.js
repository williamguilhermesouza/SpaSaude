import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Main from './pages/Main';
import FirstTime from './pages/FirstTime';
import Login from './pages/Login';
import Attendance from './pages/Attendance';
import Schedule from './pages/Schedule';
import Confirmation from './pages/Confirmation';
import Thanks from './pages/Thanks';


function headerOptions(title) {
    return {
        title: title,
        headerStyle: {
            backgroundColor: '#FDD4C3',
        },
    };
}

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                <AppStack.Screen name="FirstTime" component={FirstTime} options={headerOptions('Primeira Vez')}/>
                <AppStack.Screen name="Login" component={Login} options={headerOptions('Login')}/>
                <AppStack.Screen name="Attendance" component={Attendance} options={headerOptions('Escolha seu Atendimento')}/>
                <AppStack.Screen name="Schedule" component={Schedule} options={headerOptions('Agende seu Horário')}/>
                <AppStack.Screen name="Confirmation" component={Confirmation} options={headerOptions('Confirme seu Agendamento')}/>
                <AppStack.Screen name="Thanks" component={Thanks} options={headerOptions('Obrigado!!!')}/>
            </AppStack.Navigator>
        </NavigationContainer>
    ); 
}