import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Meta from './pages/Meta';
import AddMeta from './pages/AddMeta';

const Stack = createStackNavigator();

export default function Routes() {

    const screenOptionStyle = {
        headerStyle: {
            backgroundColor: '#171941'
        },
        headerTintColor: '#bf38ac',
        headerBackTitle: "Voltar"
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: "Dashboard"
                    }} />
                <Stack.Screen
                    name="Meta"
                    component={Meta}
                    options={{
                        headerTitle: "Listar"
                    }} />
                <Stack.Screen
                    name="AddMeta"
                    component={AddMeta}
                    options={{
                        headerTitle: "Cadastrar"
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}