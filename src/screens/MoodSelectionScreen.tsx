//Grupo: Aline Silvério Mendes e Luana de Carvalho Bomfim

import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import {styles} from '../components/Style'

export default function MoodSelectionScreen({ route, navigation }: any) {

    const {email} = route.params;

    const humor = {
        feliz: require('../../assets/feliz.gif'),
        titulo1: 'Felicidade',
        cor1: '#ffd000',
        felicidade: "   A felicidade é um estado emocional marcado por sensações de contentamento, leveza e bem-estar. " +
                    "Quando alguém está feliz, geralmente demonstra entusiasmo, energia positiva e uma visão otimista da vida. " +
                    "Esse tipo de sentimento é acompanhado por sorrisos espontâneos, risadas, maior sociabilidade e disposição para interagir com os outros de forma gentil e acolhedora.\n\n" + 
                    "   Fisicamente, pode-se notar olhos mais brilhantes, postura mais aberta e expressões faciais relaxadas. " + 
                    "Psicologicamente, a pessoa tende a ter pensamentos mais positivos, maior tolerância a frustrações e mais facilidade para encontrar prazer nas pequenas coisas do dia a dia.\n\n" + 
                    "   A felicidade pode ser provocada por acontecimentos agradáveis, como boas notícias, interações afetivas, conquistas pessoais, lembranças positivas ou até mesmo por uma sensação interna de gratidão e paz. " +
                    "Ela é essencial para o equilíbrio emocional, favorecendo a saúde mental e fortalecendo os vínculos sociais.",
        
        neutro: require('../../assets/neutro.gif'),
        titulo2: 'Neutralidade',
        cor2: '#9dfcfd',
        neutralidade: "   A neutralidade é uma experiência emocional caracterizada pela ausência de julgamentos, preferências ou reações afetivas intensas. " +
                      "Quando alguém se sente neutro, não há envolvimento emocional marcante — nem positivo, nem negativo — em relação a uma situação, pessoa ou escolha. " +
                      "É como estar em um ponto de equilíbrio, onde os sentimentos não pendem para nenhum lado específico.\n\n" +
                      "   Esse sentimento pode surgir em contextos nos quais a pessoa não tem interesse direto, não se sente ameaçada ou beneficiada, ou simplesmente adota uma postura de observação, sem se deixar levar por impulsos emocionais. " +
                      "A neutralidade pode ser momentânea ou intencional, como quando alguém escolhe se manter imparcial para evitar conflitos ou tomar decisões mais objetivas.\n\n" +
                      " Psicologicamente, o sentimento de neutralidade pode trazer calma, foco e clareza, mas também pode ser interpretado, por outros, como frieza ou distanciamento. " +
                      "No entanto, ele não é sinônimo de indiferença — é, antes, um estado consciente de equilíbrio emocional, útil em situações que exigem racionalidade, moderação e escuta ativa.",
    
        triste: require('../../assets/triste.gif'),
        titulo3: 'Tristeza',
        cor3: '#f5454f',
        tristeza: "   A tristeza é uma emoção humana natural, geralmente associada à perda, frustração, decepção ou situações que causam dor emocional." +
                  "Ele se manifesta como uma sensação de peso interior, vazio, ou melancolia, e pode variar de leve a intensa, dependendo do motivo e da pessoa.\n\n" +
                  "   Quando alguém está triste, é comum haver uma diminuição na energia, na motivação e no interesse por atividades que normalmente trariam prazer." +
                  "A pessoa pode sentir vontade de se isolar, chorar ou simplesmente ficar em silêncio." +
                  "Fisicamente, a tristeza pode se refletir em expressões faciais abatidas, olhar caído, ombros curvados e uma fala mais lenta e baixa.\n\n" +
                  "   Apesar de ser uma emoção desconfortável, a tristeza tem um papel importante na vida emocional: ela nos ajuda a processar perdas, refletir sobre experiências difíceis e, muitas vezes, a crescer emocionalmente." +
                  "É também um sinal de que algo precisa de atenção — seja uma dor não resolvida, um desejo frustrado ou uma mudança necessária." +
                  "Quando acolhida e compreendida, a tristeza pode ser um caminho para o autoconhecimento e a cura.",
    };

    function resultado(escolha: number){
        if(escolha == 1){
            navigation.navigate('pag-result', {
                emoji: humor.feliz,
                titulo: humor.titulo1,
                cor: humor.cor1,
                texto: humor.felicidade,
                usuario: email,
            });
        }
        if(escolha == 2){
            navigation.navigate('pag-result', {
                emoji: humor.neutro,
                titulo: humor.titulo2,
                cor: humor.cor2,
                texto: humor.neutralidade,
                usuario: email,
            });
        }
        if(escolha == 3){
            navigation.navigate('pag-result', {
                emoji: humor.triste,
                titulo: humor.titulo3,
                cor: humor.cor3,
                texto: humor.tristeza,
                usuario: email,
            });
        }
        
    }

    return (
        <View style={styles.viewSelecao}>

            <Text style={styles.titulo}>Meu Humor</Text>

            <Text style={styles.textoPergunta}>Como você está se sentindo hoje?</Text>

            <Text style={styles.textoInstrucao}>Clique em um emoji</Text>

            <Pressable onPress={() => resultado(1)}>

                <Image
                    style={styles.imgEmoji} 
                    source={ require('../../assets/feliz.png')}
                />

            </Pressable>

            <Pressable onPress={() => resultado(2)}>

                <Image
                    style={styles.imgEmoji} 
                    source={ require('../../assets/neutro.png')}
                />

            </Pressable>

            <Pressable onPress={() => resultado(3)}>

                <Image
                    style={styles.imgEmoji} 
                    source={ require('../../assets/triste.png')}
                />

            </Pressable>

        </View>
    )
}