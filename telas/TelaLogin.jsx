import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import InputPersonalizado from '../components/InputPersonalizado';

function TelaLogin({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>💞 Tela de Login 💞</Text>

            <View style={estilos.formulario}>
                <InputPersonalizado 
                    legenda="Digite seu e-mail do amor 💌"
                    textoTemporario="Ex: amorzin@gmail.com"
                    valor={email}
                    aoAlterarValor={setEmail}
                />

                <InputPersonalizado 
                    legenda="Sua senha secreta 💕"
                    textoTemporario="No mínimo 6 caracteres"
                    valor={senha}
                    aoAlterarValor={setSenha}
                    ehSenha={true}
                />
            </View>

            <View style={estilos.botoes}>
                <View style={estilos.botao}>
                    <Button 
                        title="Criar Conta 💗" 
                        color="#e91e63"
                        onPress={() => navigation.navigate('Cadastro')} 
                    />
                </View>

                <View style={estilos.botao}>
                    <Button 
                        title="Explorar Conexões 💫" 
                        color="#f48fb1"
                        onPress={() => navigation.navigate('Descobrir')} 
                    />
                </View>
            </View>
        </View>
    );
}

export default TelaLogin;

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff0f5', // Rosa claro romântico
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#e91e63',
        textAlign: 'center',
        marginBottom: 30,
    },
    formulario: {
        width: '100%',
        marginBottom: 30,
    },
    botoes: {
        width: '100%',
        alignItems: 'center',
    },
    botao: {
        width: '100%',
        marginVertical: 8,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#e91e63',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
});
