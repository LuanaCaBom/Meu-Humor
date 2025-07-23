//Grupo: Aline Silvério Mendes e Luana de Carvalho Bomfim

import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, Alert } from 'react-native';
import { Image } from 'expo-image';
import {styles} from '../components/Style'

export default function LoginScreen({ navigation }: any) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [texto, setTexto] = useState("");

    const usuario = {login: email};

    const campos = () => {
        if(email.includes('@') == false){
            Alert.alert(
                'O email deve conter um @!'
            )
        }
        if(senha.length < 4){
            Alert.alert(
                'A senha deve conter no mínimo 4 caracteres!'
            )
        }
        else{
            verificarLogin();
        }
    }

    function verificarLogin(){
        if(email == 'adm@email' && senha == '1234'){
            navigation.navigate('pag-mood', {email: usuario.login});
            setTexto("");
        }
        else{
            setTexto('Senha ou email incorretos');
        }
    }

    return (
        <View style={styles.viewLogin}>

            <Text style={styles.titulo}>Meu Humor</Text>

            <Text style={styles.titulo}>Seja bem-vindo(a) !!!</Text>

            <View style={styles.viewCaixa}>

                <View style={styles.viewInCaixa}>

                    <Text style={styles.textoLogin}>Email: </Text>

                    <TextInput style={styles.inputTexto} value={email} onChangeText={setEmail}/>

                </View>

                <View style={styles.viewInCaixa}>

                    <Text style={styles.textoLogin}>Senha: </Text>

                    <TextInput style={styles.inputTexto} value={senha} onChangeText={setSenha}/>

                </View>

            <Text style={styles.textoAlerta}>{texto}</Text>

            </View>

            <Pressable onPress={campos} style={styles.btnEntrar}>

                <Text style={styles.textoBtn}>Entrar</Text>

            </Pressable>

            <Image 
                style={styles.gifHumores}
                source={ require('../../assets/escolha.gif')}
                contentFit="cover"   
            />

        </View>
    )
}