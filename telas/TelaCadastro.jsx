import { View, Text, Button } from 'react-native';

function TelaCadastro ({ navigation }) {
    return (
        <View>
            <Text>Tela de Cadastro</Text>

            <Button
                title="Ir para Login"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
}

export default TelaCadastro;