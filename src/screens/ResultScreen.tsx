import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Pressable } from 'react-native';
import { Image } from 'expo-image';

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
        <ScrollView style={{backgroundColor: '#67baff54', paddingTop: 30}}>

            <View style={{flex: 1, alignItems: 'center'}}>

                <Text style={{fontSize: 32, fontWeight: 'bold'}}>Meu Humor</Text>

                <Text 
                    style={{fontSize: 28, 
                            color: cor, 
                            textShadowColor: 'black', 
                            textShadowRadius: 3.5, 
                            fontWeight: 'bold', 
                            paddingTop: 20
                        }}
                >
                    {titulo}
                </Text>

                <Image 
                    style={{ width: 250, height: 200, margin: 5}}
                    source={emoji}
                    contentFit="cover"  
                />

                <Text style={{textAlign: 'justify', fontSize: 16.5, width: 350, marginBottom: 20}}>{texto}</Text>
                
                <View style={{backgroundColor: '#F7F08B', borderWidth: 1, borderRadius: 10, width: 350, padding: 5}}>
                    
                    <Text 
                        style={{fontSize: 20, 
                                fontWeight: 'bold', 
                                paddingLeft: 3, 
                                paddingBottom: 5
                            }}
                    >
                        Por que você se sente assim?
                    </Text>
                    
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>

                        <TextInput 
                            style={{backgroundColor: 'white', 
                                    borderWidth: 0.2, 
                                    borderRadius: 10, 
                                    height: 41, 
                                    width: 260
                                }}
                            value={resposta}
                            onChangeText={setResposta}
                            placeholder='Digite aqui...'
                        />

                        <Pressable 
                            onPress={enviar} 
                            style={{borderWidth: 2, 
                                    borderRadius: 10, 
                                    padding: 4, 
                                    marginLeft: 7, 
                                    width: 70, 
                                    height: 38, 
                                    justifyContent: 'center', 
                                    alignItems: 'center', 
                                    backgroundColor: cor
                                }}
                        >
                            <Text 
                                style={{fontSize: 18, 
                                        fontWeight: 'bold',
                                        color: 'white',
                                        textShadowColor: 'black', 
                                        textShadowRadius: 4
                                    }}
                            >
                                Enviar
                            </Text>

                        </Pressable>
                    
                    </View>

                    <Text style={{marginBottom: 5, marginTop: 20, fontWeight: 'bold', fontSize: 17}}>Respostas:</Text>

                    <View style={{flexDirection: 'row'}}>

                        <Text style={{fontWeight: 'bold'}}>{user}</Text>
                        
                        <Text>{motivo}</Text>
                    
                    </View>
                
                </View>
                
                <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', width: 350, marginTop: 15}}>

                    <Pressable 
                        onPress={enviar} 
                        style={{borderWidth: 2, 
                                borderRadius: 10, 
                                padding: 1, 
                                marginLeft: 7,  
                                width: 90, 
                                height: 38, 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                backgroundColor: '#9b9b9b',
                                marginBottom: 100
                            }}
                    >

                        <Text 
                            style={{fontSize: 23, 
                                    fontWeight: 'bold',
                                    color: 'white',
                                    textShadowColor: 'black', 
                                    textShadowRadius: 4
                                }}
                            onPress={() => navigation.goBack()}
                        >
                            Voltar
                        </Text>

                    </Pressable>

                    <Text style={{marginBottom: 300}}>Perguntar como que faz para o teclado não roubar espaço (criar espaço durante o uso)</Text>
                    {/*remover isso depois*/}

                </View>
                
            </View>
            
        </ScrollView>
    )
}