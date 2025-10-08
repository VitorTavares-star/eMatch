import { View, Text, Button } from 'react-native';

function TelaLogin ({ navigation }) {
    return (
        <View>
            <Text>Tela de Login</Text>

            <Button
                title="Ir para Cadastro"
                onPress={() => navigation.navigate("Cadastro")}
            />

            <Button
                title="Ir para Descobrir"
                onPress={() => navigation.navigate("Descobrir")}
            />
        </View>
    );
}

export default TelaLogin;