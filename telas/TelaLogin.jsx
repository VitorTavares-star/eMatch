import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

import InputPersonalizado from '../components/InputPersonalizado';

function TelaLogin({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <View>
            <Text>Tela de Login</Text>

            <InputPersonalizado 
                legenda="Digite seu email"
                textoTemporario="Ex: email@gmail.com"
                valor={email}
                aoAlterarValor={setEmail}
            />

            <InputPersonalizado 
                legenda="Crie uma senha"
                textoTemporario="No mínimo 6 caracteres"
                valor={senha}
                aoAlterarValor={setSenha}
                ehSenha={true}
            />

            <Button 
                title="Ir para Cadastro" 
                onPress={() => navigation.navigate('Cadastro')} 
            />

            <Button 
                title="Ir para Descobrir" 
                onPress={() => navigation.navigate('Descobrir')} 
            />
        </View>
    );
}

export default TelaLogin;