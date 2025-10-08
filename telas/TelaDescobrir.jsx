import { View, Text, Button } from 'react-native';

function TelaDescobrir ({ navigation }) {
    return (
        <View>
            <Text>Tela Descobrir</Text>

            <Button
                title="Ir para Login"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
}

export default TelaDescobrir;