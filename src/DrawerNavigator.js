import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import UsuarioLogado from './components/UsuarioLogado';
import Botao from './components/Botao';
import Contador from './components/Contador';
import ListaProduto from './components/Lista/ListaProduto';
import DigiteSeuNome from './components/DigiteSeuNome';
import DimensoesFixas from './components/DimensoesFixas';
import Familia from './components/relacao/Familia';
import Mega from './components/MegaSena/Mega';
import Membro from './components/relacao/Membro';
import Calculadora from './components/Calculadora'
import CalculadoraIMC from './components/CalculadoraIMC'
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Simples">
        {props => <Simples texto="Programando React Native" {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="ParImpar">
        {props => <ParImpar num={543} {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="UsuarioLogado">
        {props => (
          <UsuarioLogado
            usuario={{nome: 'teste', email: 'teste@teste.com'}}
            {...props}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Botao" component={Botao} />
      <Drawer.Screen name="Contador">
        {props => <Contador valorInicial={20} {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="Lista" component={ListaProduto} />
      <Drawer.Screen name="DigiteSeuNome" component={DigiteSeuNome} />
      <Drawer.Screen name="DimensoesFixas" component={DimensoesFixas} />
      <Drawer.Screen name="Familia">
        {props => <Membro nome="Ana" sobrenome="Silva" {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="Mega">
        {props => <Mega qtdeNumeros={7} {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="Calculadora" component={Calculadora} />
      <Drawer.Screen name="CalculadoraIMC" component={CalculadoraIMC} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
