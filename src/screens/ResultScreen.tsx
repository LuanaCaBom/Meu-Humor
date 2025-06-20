import React from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';

export default function MoodSelectionScreen({ navigation }: any) {

    return (
        <View style={{backgroundColor: '#67baff54', flex: 1, alignItems: 'center', paddingTop: 40}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', paddingBottom: 40}}>Meu Humor</Text>

            <Text>Fazer</Text>
        </View>
    )
}