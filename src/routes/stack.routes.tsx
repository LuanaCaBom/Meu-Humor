//importação do "gerente" de navegação baseado em pilha
import { createStackNavigator } from "@react-navigation/stack"
//importação do NavigationContainer que será um componente visual
import { NavigationContainer } from "@react-navigation/native";

//desestruturação de componente
const {Screen, Navigator} = createStackNavigator();

import Login from '../screens/LoginScreen'
import Mood from '../screens/MoodSelectionScreen'

export default function StackRoutes(){
    return (
        <NavigationContainer>
            <Navigator>

                <Screen
                    name='pag-login'
                    component={Login}
                />
                <Screen
                    name='pag-mood'
                    component={Mood}
                />

            </Navigator>
        </NavigationContainer>
    )
}