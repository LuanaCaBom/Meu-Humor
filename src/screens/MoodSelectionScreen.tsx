import React from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';

export default function MoodSelectionScreen({ navigation }: any) {

    function resultado(){
        navigation.navigate('pag-result');
    }

    return (
        <View style={{backgroundColor: '#67baff54', flex: 1, alignItems: 'center', paddingTop: 40}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', paddingBottom: 40}}>Meu Humor</Text>

            <Text style={{fontSize: 20, paddingBottom: 20, fontWeight: 'bold'}}>Como você está se sentindo hoje?</Text>
            <Pressable onPress={resultado}>
                <Image
                    style={{ width: 110, height: 110, margin: 20}} 
                    source={ require('../../assets/sorrir (1).png')}
                />
            </Pressable>
            <Pressable onPress={resultado}>
                <Image
                    style={{ width: 110, height: 110, margin: 20}} 
                    source={ require('../../assets/neutro (1).png')}
                />
            </Pressable>
            <Pressable onPress={resultado}>
                <Image
                    style={{ width: 110, height: 110, margin: 20}} 
                    source={ require('../../assets/triste (1).png')}
                />
            </Pressable>
            <Text style={{fontSize: 20, paddingTop: 20, color: 'red'}}>Clique em um emoji</Text>
        </View>
    )
}