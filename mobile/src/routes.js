import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Main from './pages/Main';
import FirstTime from './pages/FirstTime';

function headerOptions() {
    return {
        title: 'Primeira Vez',
        headerStyle: {
            backgroundColor: '#FDD4C3',
        },
        headerTitleStyle: {
            paddingLeft: 75,
        },
    };
}

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                <AppStack.Screen name="FirstTime" component={FirstTime} options={headerOptions}/>
            </AppStack.Navigator>
        </NavigationContainer>
    ); 
}