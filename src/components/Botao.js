import React from "react";
import { Button, View } from "react-native";
import Padrao from "../estilo/Padrao";

export default props => {
  function executar(){
    console.warn("Botão Acionado")
  }

  return(
    <View style={Padrao.container}>
       <Button title="Executar" onPress={executar}/>
       <Button title="Executar #02" onPress={function() { console.warn('Exec #02!')}}/>
       <Button title="Executar #03" onPress={function() { console.warn('Exec #03!')}}/>
    </View>
  )
}