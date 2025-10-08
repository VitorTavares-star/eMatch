import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import TelaLogin from "./telas/TelaLogin";
import TelaCadastro from "./telas/TelaCadastro";
import TelaDescobrir from "./telas/TelaDescobrir";

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={TelaLogin}/>
        <Stack.Screen name="Cadastro" component={TelaCadastro}/>
        <Stack.Screen name="Descobrir" component={TelaDescobrir}/>
      </Stack.Navigator>
    </NavigationContainer>
  );                                                                                                                                                                                    
}

export default App;
