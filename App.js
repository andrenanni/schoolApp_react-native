import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EnsinoIntegrado from './components/Ensinointegrado';
import EnsinoMedio from './components/Ensinomedio';
import Home from './components/Home';
import QuemSomos from './components/Quemsomos';

const Drawer = createDrawerNavigator();

function Logo() {
  <View>
    <Image
      source={require('./assets/logo-gov-sp.png')}
    />
  </View>
}


function DrawerMenu() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#b20000',
          width: '100%'
        },
        drawerLabelStyle: {
          color: 'white',
          fontSize: 17,
        },
      }
      }
    >
      <Drawer.Screen name={Logo} component={Home} />
      <Drawer.Screen name="Quem Somos" component={QuemSomos} />
      <Drawer.Screen name="Ensino Médio" component={EnsinoMedio} />
      <Drawer.Screen name="Ensino Integrado" component={EnsinoIntegrado} />
    </ Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerMenu />
    </NavigationContainer>
  );
}