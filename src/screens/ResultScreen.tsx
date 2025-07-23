//Grupo: Aline Silvério Mendes e Luana de Carvalho Bomfim

import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { Image } from 'expo-image';
import {styles} from '../components/Style'

export default function MoodSelectionScreen({ route, navigation }: any) {

    const { emoji, titulo, cor, texto, usuario } = route.params;
    
    const [resposta, setResposta] = useState("");
    const [motivo, setMotivo] = useState("Ainda não há nenhuma respostas");
    const [user, setUser] = useState("");

    function enviar(){
        setMotivo(resposta);
        setUser(usuario + ": ");
        setResposta("");
    }; 

    return (
        <KeyboardAvoidingView behavior='height'>
            <ScrollView style={styles.viewResultado}>

                <View style={styles.viewInResultado}>

                    <Text style={styles.titulo2}>Meu Humor</Text>

                    <Text style={[styles.tituloHumor, {color: cor}]}>
                        {titulo}
                    </Text>

                    <Image 
                        style={styles.gifEscolha}
                        source={emoji}
                        contentFit="cover"  
                    />

                    <Text style={styles.textao}>{texto}</Text>
                    
                    <View style={styles.viewCaixaComents}>
                        
                        <Text style={styles.textoPerguntaComents}>
                            Por que você se sente assim?
                        </Text>
                        
                        <View style={styles.viewInCaixaComents}>

                            <TextInput 
                                style={styles.inputComents}
                                value={resposta}
                                onChangeText={setResposta}
                                placeholder='Digite aqui...'
                            />

                            <Pressable onPress={enviar} style={[styles.btnEnviar, {backgroundColor: cor}]}>

                                <Text style={styles.textoBtnComents}>
                                    Enviar
                                </Text>

                            </Pressable>
                        
                        </View>

                        <Text style={styles.textoResposta}>Respostas:</Text>

                        <View style={styles.viewResposta}>

                            <Text style={styles.textoUser}>{user}</Text>
                            
                            <Text>{motivo}</Text>
                        
                        </View>
                    
                    </View>
                    
                    <View style={styles.viewVoltar}>

                        <Pressable onPress={enviar} style={styles.btnVoltar}>

                            <Text style={styles.textoBtn} onPress={() => navigation.goBack()}>
                                Voltar
                            </Text>

                        </Pressable>

                    </View>
                    
                </View>
                
            </ScrollView>
        </KeyboardAvoidingView>
    )
}