import { View, Text, Button } from 'react-native'
import React from 'react'

export default function EnsinoIntegrado() {
    return (
        <View>
            <Text>Nanni</Text>
            <Button
                title='Ir para Sobre'
                onPress={() => props.navigation.navigate("Sobre")}
            />
        </View>
    )
} 