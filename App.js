import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/Home/Home';
import Login from './views/Home/Login';
import Cadastro_Local from './views/Home/Cadastro_Local';
import Cadastro_Perfil from './views/Home/Cadastro_Perfil';

import Oftalmologista_Home from './views/Oftalmologista/Oftalmologista_Home';
import Exames_Pendentes from './views/Oftalmologista/Exames_Pendentes';
import Visualizar_Exame from './views/Oftalmologista/Visualizar_Exame';

import Admin_Home from './views/Admin/Admin_Home';

import Examinador_Home from './views/Examinador/Examinador_Home';

import Requisitante_Home from './views/Requisitante/Requisitante_Home';
import Solicitacao_Exame from './views/Requisitante/Solicitacao_Exame';

import Ver_Laudos from './views/Ver_Laudos';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Requisitante_Home' component={Requisitante_Home} />
        <Stack.Screen name='Solicitacao_Exame' component={Solicitacao_Exame} />
        <Stack.Screen name='Ver_Laudos' component={Ver_Laudos} />

        <Stack.Screen name='Oftalmologista_Home' component={Oftalmologista_Home} />
        <Stack.Screen name='Exames_Pendentes' component={Exames_Pendentes} />
        <Stack.Screen name='Visualizar_Exame' component={Visualizar_Exame} />

        <Stack.Screen name='Examinador_Home' component={Examinador_Home} />
        
        <Stack.Screen name='Admin_Home' component={Admin_Home} />

        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Cadastro_Local' component={Cadastro_Local} />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}