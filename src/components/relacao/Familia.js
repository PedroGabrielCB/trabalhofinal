import React from "react";
import { Text, View } from "react-native";
import Membro from './Membro';
import Padrao from "../../estilo/Padrao";

export default props => {
  return(
    <View style={Padrao.container}>
      <Text>Membros da Familia</Text>
      {props.children}
    </View>
  )
}