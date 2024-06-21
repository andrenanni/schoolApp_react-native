import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title='Ir para Sobre'
        onPress={() => props.navigation.navigate("Sobre")}
      />
    </View>
  );
}

function SobreScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Sobre Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Quem Somos" component={SobreScreen} />
        <Drawer.Screen name="Ensino Médio" component={SobreScreen} />
        <Drawer.Screen name="Ensino Integrado" component={SobreScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const estilos = StyleSheet.create({
  sideBarMenu: {
    backgroundColor: "#cf132c",
}});

export default App;