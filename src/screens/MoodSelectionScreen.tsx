import React from 'react';
import { View, Text, Button, TextInput, Pressable } from 'react-native';
import Emoji from 'react-native-emoji';

export default function MoodSelectionScreen({ navigation }: any) {

    function verificarLogin(){
        navigation.navigate('pag-mood');
    }

    return (
        <View style={{backgroundColor: 'red', flex: 1}}>
            <Text>Como você está se sentindo hoje?</Text>
            <Pressable onPress={verificarLogin}><Text style={{fontSize: 80}}>😃</Text></Pressable>
            <Pressable onPress={verificarLogin}><Text style={{fontSize: 80}}>😐</Text></Pressable>
            <Pressable onPress={verificarLogin}><Text style={{fontSize: 80}}>😢</Text></Pressable>
        </View>
    )
}