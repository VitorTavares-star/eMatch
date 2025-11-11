import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

import InputPersonalizado from '../components/InputPersonalizado';

function TelaCadastro({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [errors, setErrors] = useState([]);

    const efetuarCadastro = async () => {
        let erros = [];

        if (senha !== confirmarSenha) {
            erros.push('As senhas não coincidem 💔');
        }

        if (senha.length !== 6) {
            erros.push('A senha deve ter exatamente 6 caracteres 🔐');
        }

        if (nome.trim() === '' || email.trim() === '') {
            erros.push('Nome e email não podem estar vazios 💌');
        }

        setErrors(erros);

        if (erros.length > 0) return;

        try {
            await axios.post("http://10.0.8.58:3000/api/usuarios", {
                nome,
                email,
                senha,
            });
            navigation.navigate('Login');
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
        }
    };

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>💖 Crie sua conta no LoveConnect 💖</Text>
            <Text style={estilos.subtitulo}>Comece sua jornada para novas conexões</Text>

            {errors.length > 0 && (
                <View style={estilos.erros}>
                    {errors.map((erro, index) => (
                        <Text key={index} style={estilos.textoErro}>{erro}</Text>
                    ))}
                </View>
            )}

            <InputPersonalizado
                legenda="Qual seu nome?"
                textoTemporario="Ex: Jessica"
                valor={nome}
                aoAlterarValor={setNome}
            />

            <InputPersonalizado
                legenda="Qual seu e-mail?"
                textoTemporario="Ex: amorzin@gmail.com"
                valor={email}
                aoAlterarValor={setEmail}
            />

            <InputPersonalizado
                legenda="Crie uma senha 💕"
                textoTemporario="6 caracteres"
                valor={senha}
                aoAlterarValor={setSenha}
                ehSenha={true}
            />

            <InputPersonalizado
                legenda="Confirme sua senha 💌"
                textoTemporario="Digite novamente"
                valor={confirmarSenha}
                aoAlterarValor={setConfirmarSenha}
                ehSenha={true}
            />

            <View style={estilos.botoes}>
                <View style={estilos.botao}>
                    <Button
                        title="Criar Conta 💗"
                        color="#e91e63"
                        onPress={efetuarCadastro}
                    />
                </View>
                <View style={estilos.botao}>
                    <Button
                        title="Cancelar 💔"
                        color="#f48fb1"
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>
            </View>
        </View>
    );
}

export default TelaCadastro;

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff0f5', // rosa clarinho
        padding: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#e91e63',
        textAlign: 'center',
        marginBottom: 5,
    },
    subtitulo: {
        fontSize: 16,
        color: '#ad1457',
        textAlign: 'center',
        marginBottom: 20,
    },
    erros: {
        backgroundColor: '#ffe4ec',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        width: '100%',
    },
    textoErro: {
        color: '#c2185b',
        textAlign: 'center',
        fontStyle: 'italic',
        marginVertical: 2,
    },
    botoes: {
        width: '100%',
        marginTop: 25,
    },
    botao: {
        marginVertical: 8,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#e91e63',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
});
