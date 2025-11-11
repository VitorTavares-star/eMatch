import React, { useState, useEffect, useRef } from 'react';
import { 
    View, 
    Text,
    Button,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    Dimensions
} from 'react-native';
import axios from 'axios';

const { width: larguraTela } = Dimensions.get('window');

function TelaDescobrir() {
    const [usuarios, setUsuarios] = useState([]);
    const flatListRef = useRef(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        buscaUsuarios();
    }, []);

    const buscaUsuarios = async () => {
        try {
            const resposta = await axios.get("http://10.0.8.58:3000/api/usuarios");
            setUsuarios(resposta.data);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }
    };

    const irPara = (novoIndex) => () => {
        if (novoIndex >= 0 && novoIndex < usuarios.length) {
            flatListRef.current.scrollToIndex({ index: novoIndex, animated: true });
            setIndex(novoIndex);
        }
    };

    const cartaoUsuario = ({ item }) => {
        return (
            <View style={[styles.card, { width: larguraTela * 0.9 }]}>
                <Text style={styles.titulo}>{item.nome} 💖</Text>
                <Text style={styles.email}>{item.email}</Text>
                <Text style={styles.descricao}>💌 Pronto(a) para novas conexões!</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {usuarios.length === 0 ? (
                <View style={styles.center}>
                    <ActivityIndicator size="large" color="#e91e63" />
                    <Text style={styles.carregando}>Buscando corações próximos...</Text>
                </View>
            ) : (
                <>
                    <FlatList
                        data={usuarios}
                        ref={flatListRef}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={cartaoUsuario}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onMomentumScrollEnd={(event) => {
                            const novoIndex = Math.round(event.nativeEvent.contentOffset.x / larguraTela);
                            setIndex(novoIndex);
                        }}
                    />

                    <View style={styles.botoes}>
                        <Button 
                            title="💞 Voltar" 
                            color="#f48fb1"
                            disabled={index === 0} 
                            onPress={irPara(index - 1)} 
                        />

                        <Text style={styles.indicador}>
                            {index + 1} / {usuarios.length}
                        </Text>

                        <Button 
                            title="Avançar 💘" 
                            color="#e91e63"
                            disabled={index === usuarios.length - 1} 
                            onPress={irPara(index + 1)} 
                        />
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff0f5', // Rosa claro de fundo
    },
    center: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    carregando: {
        marginTop: 10,
        color: '#ad1457',
        fontSize: 16,
        fontStyle: 'italic'
    },
    card: {
        backgroundColor: '#ffe4ec', // rosa suave
        borderRadius: 20,
        padding: 25,
        marginHorizontal: larguraTela * 0.05,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#e91e63',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },
    titulo: { 
        fontSize: 22, 
        fontWeight: 'bold', 
        color: '#e91e63',
        marginBottom: 10,
    },
    email: { 
        fontSize: 16, 
        color: '#ad1457',
        marginBottom: 6,
    },
    descricao: {
        fontSize: 14,
        color: '#6a1b9a',
        fontStyle: 'italic',
    },
    botoes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 25,
        paddingHorizontal: 10,
    },
    indicador: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#e91e63',
    },
});

export default TelaDescobrir;
