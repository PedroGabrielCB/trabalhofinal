import React from "react";
import { View,Text,StyleSheet } from "react-native";
import Padrao from "../estilo/Padrao";

function getParImpar(num) {
  const resultado = num % 2 === 0 ? "PAR" : "IMPAR"

  return <Text style={Padrao.ex}>{resultado}</Text>
}

export default props => 
  <View style={style.container}>
    <Text style={Padrao.txtG}> O número {props.num} é </Text>
    {
      getParImpar(props.num)
    }
  </View>

  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })