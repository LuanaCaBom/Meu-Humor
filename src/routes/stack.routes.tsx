//Grupo: Aline Silvério Mendes e Luana de Carvalho Bomfim

//importação do "gerente" de navegação baseado em pilha
import { createStackNavigator } from "@react-navigation/stack"
//importação do NavigationContainer que será um componente visual
import { NavigationContainer } from "@react-navigation/native";

//desestruturação de componente
const {Screen, Navigator} = createStackNavigator();

import Login from '../screens/LoginScreen'
import Mood from '../screens/MoodSelectionScreen'
import Result from '../screens/ResultScreen'

export default function StackRoutes(){
    return (
        <NavigationContainer>
            <Navigator>

                <Screen 
                    name='pag-login'
                    component={Login}
                    options={{title: 'Meu Humor  -  Login'}}
                />
                <Screen
                    name='pag-mood'
                    component={Mood}
                    options={{title: 'Meu Humor  -  Seleção do Mood'}}
                />
                <Screen
                    name='pag-result'
                    component={Result}
                    options={{title: 'Meu Humor  -  Resultado'}}
                />

            </Navigator>
        </NavigationContainer>
    )
}