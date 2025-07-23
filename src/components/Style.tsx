//Grupo: Aline Silvério Mendes e Luana de Carvalho Bomfim

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewLogin:{
        flex: 1, 
        alignItems:'center', 
        paddingTop: 70, 
        backgroundColor: '#67baff54'
    },
    viewSelecao: {
        backgroundColor: '#67baff54', 
        flex: 1, 
        alignItems: 'center', 
        paddingTop: 40
    },
    viewResultado: {
        backgroundColor: '#67baff54', 
        paddingTop: 30
    },
    viewInResultado: {
        flex: 1, 
        alignItems: 'center'
    },
    viewCaixa: {
        backgroundColor: '#F7F08B', 
        borderWidth: 1, 
        borderRadius: 10, 
        marginBottom: 30
    },
    viewInCaixa: {
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        margin: 10, 
        marginTop: 20
    },
    viewCaixaComents: {
        backgroundColor: '#F7F08B', 
        borderWidth: 1, 
        borderRadius: 10, 
        width: 350, 
        padding: 5
    },
    viewInCaixaComents: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    viewResposta: {
        flexDirection: 'row'
    },
    viewVoltar: {
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        width: 350, 
        marginTop: 15
    },
    titulo: {
        fontSize: 25, 
        fontWeight: 'bold', 
        paddingBottom: 40
    },
    titulo2: {
        fontSize: 32, 
        fontWeight: 'bold'
    },
    tituloHumor: {
        fontSize: 28,
        textShadowColor: 'black', 
        textShadowRadius: 3.5, 
        fontWeight: 'bold', 
        paddingTop: 20
    },
    textoPergunta: {
        fontSize: 23, 
        fontWeight: 'bold'
    },
    textoPerguntaComents:{
        fontSize: 20, 
        fontWeight: 'bold', 
        paddingLeft: 3, 
        paddingBottom: 5
    },
    textoInstrucao: {
        fontSize: 20, 
        paddingBottom: 20, 
        paddingTop: 5, 
        color: '#a3a3a3'
    },
    textoLogin: {
        fontSize: 21, 
        fontWeight: 'bold'
    },
    textoAlerta: {
        color: 'red', 
        fontWeight: 'bold', 
        paddingLeft: 12, 
        paddingBottom: 12
    },
    textoResposta: {
        marginBottom: 5, 
        marginTop: 20, 
        fontWeight: 'bold', 
        fontSize: 17
    },
    textoUser: {
        fontWeight: 'bold'
    },
    textoBtn: {
        fontSize: 23, 
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'black', 
        textShadowRadius: 4
    },
    textoBtnComents: {
        fontSize: 18, 
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'black', 
        textShadowRadius: 4
    },
    textao: {
        textAlign: 'justify', 
        fontSize: 16.5, 
        width: 350, 
        marginBottom: 20
    },
    inputTexto: {
        backgroundColor: 'white', 
        borderWidth: 0.2, 
        borderRadius: 10, 
        height: 41, 
        width: 220
    },
    inputComents: {
        backgroundColor: 'white', 
        borderWidth: 0.2, 
        borderRadius: 10, 
        height: 41, 
        width: 260
    },
    btnEntrar: {
        borderWidth: 2, 
        borderRadius: 40, 
        padding: 7, 
        width: 100, 
        alignItems: 'center', 
        backgroundColor: '#dd1313'
    },
    btnVoltar: {
        borderWidth: 2, 
        borderRadius: 10, 
        padding: 1, 
        marginLeft: 7,  
        width: 90, 
        height: 38, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#9b9b9b',
        marginBottom: 100
    },
    btnEnviar: {
        borderWidth: 2, 
        borderRadius: 10, 
        padding: 4, 
        marginLeft: 7, 
        width: 70, 
        height: 38, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    gifHumores: {
        width: 450, 
        height: 200, 
        margin: 5
    },
    imgEmoji:{
        width: 110, 
        height: 110, 
        margin: 20
    },
    gifEscolha: {
        width: 250, 
        height: 200, 
        margin: 5
    }
});