import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';

import axios from 'axios';

function TelaDescobrir() {
    const [usuarios, setUsuarios] = useState([]);

    // Vai executar quando o componente for montado
    useEffect(() => {
        buscaUsuarios();
    }, []);

    // Busca os usuários cadastrados
    const buscaUsuarios = async () => {
        try {
            // Conectar no servidor para buscar os usuários
            const resposta = await axios.get("http://10.0.8.58:3000/api/usuarios");

            // Atualiza o estado com os usuários recebidos
            setUsuarios(resposta.data);

            alert('Carreguei os usuários com sucesso!');
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }
    }

    return (
        <View>
            <Text>Tela de Descobrir</Text>
        </View>
    );
}

export default TelaDescobrir;