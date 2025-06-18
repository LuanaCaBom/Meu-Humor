import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [texto, setTexto] = useState("")

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
            navigation.navigate('pag-mood');
        }
        else{
            setTexto('Senha ou email incorretos')
        }
    }

    return (
        <View style={{flex: 1}}>
            <Text>Login</Text>
            <TextInput 
                placeholder='Email...'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder='Senha...'
                value={senha}
                onChangeText={setSenha}
            />
            <Text>{texto}</Text>
            <Button 
                title='Entrar' 
                onPress={campos}
            />
        </View>
    )
}