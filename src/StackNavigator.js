import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Simples from "./components/Simples";
import ParImpar from "./components/ParImpar";
import UsuarioLogado from "./components/UsuarioLogado";
import Botao from "./components/Botao";
import Contador from "./components/Contador";
import ListaProduto from "./components/Lista/ListaProduto";
import DigiteSeuNome from "./components/DigiteSeuNome";
import DimensoesFixas from "./components/DimensoesFixas";
import Familia from "./components/relacao/Familia";
import Mega from "./components/MegaSena/Mega";


const Stack = createStackNavigator();

const MainStackNavigator = ( ) => {
  return(
    <Stack.Navigator>
       
      
      <Stack.Screen name="Simples" component={Simples}/>
      <Stack.Screen name="ParImpar" component={ParImpar}/>
      <Stack.Screen name="UsuarioLogado" component={UsuarioLogado}/>
      <Stack.Screen name="Botao" component={Botao}/>
      <Stack.Screen name="Contador" component={Contador}/>
      <Stack.Screen name="Lista" component={ListaProduto}/>
      <Stack.Screen name="DigiteSeuNome" component={DigiteSeuNome}/>
      <Stack.Screen name="DimensoesFixas" component={DimensoesFixas}/>
      <Stack.Screen name="Familia" component={Familia}/>
      <Stack.Screen name="Mega" component={Mega}/>
    </Stack.Navigator>
  )
}

export { MainStackNavigator }