import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
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
        <Drawer.Screen name="Sobre" component={SobreScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;