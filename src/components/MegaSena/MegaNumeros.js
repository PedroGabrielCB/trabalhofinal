import React from "react";
import { Text, View,StyleSheet } from "react-native";

import Padrao from "../../estilo/Padrao";

export default props => {
  return(
    <View style={displayNumero.container}>
      <Text key={1} style={[Padrao.txtG, Padrao.center, displayNumero.Numero]}>
        {props.num}
      </Text>
    </View>
  )
}

const displayNumero = StyleSheet.create({
  container:{
    height: 50,
    width: 50,
    backgroundColor: '#000',
    margin: 5,
    borderRadius: 25
  },
  Numero: {
    color: '#FFF'
  }
})