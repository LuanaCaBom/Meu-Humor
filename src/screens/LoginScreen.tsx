import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, Alert } from 'react-native';
import { Image } from 'expo-image';

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
            setTexto("");
        }
        else{
            setTexto('Senha ou email incorretos')
        }
    }

    return (
        <View style={{flex: 1, alignItems:'center', paddingTop: 70, backgroundColor: '#67baff54'}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', paddingBottom: 40}}>Meu Humor</Text>

            <Text style={{fontSize: 25, fontWeight: 'bold', paddingBottom: 30}}>Seja bem-vindo(a) !!!</Text>

            <View style={{backgroundColor: '#F7F08B', borderWidth: 1, borderRadius: 10, marginBottom: 30}}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: 10, marginTop: 20}}>
                    <Text style={{fontSize: 21, fontWeight: 'bold'}}>Email: </Text>
                    <TextInput 
                        style={{backgroundColor: 'white', borderWidth: 0.2, borderRadius: 10, height: 41, width: 220}}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: 10}}>
                    <Text style={{fontSize: 21, fontWeight: 'bold'}}>Senha: </Text>
                    <TextInput
                        style={{backgroundColor: 'white', borderWidth: 0.2, borderRadius: 10, height: 41, width: 220}}
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>
            <Text style={{color: 'red'}}>{texto}</Text>
            </View>

            <Pressable onPress={campos} style={{borderWidth: 2, borderRadius: 40, padding: 7, width: 100, alignItems: 'center', backgroundColor: '#dd1313'}}>
                <Text style={{fontSize: 23, color: 'white'}}>Entrar</Text>
            </Pressable>

            <Image 
                style={{ width: 450, height: 200, margin: 5}}
                source={ require('../../assets/escolha.gif')}
                contentFit="cover"   
            />
        </View>
    )
}