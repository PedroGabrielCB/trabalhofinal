import React from "react";
import { Text } from "react-native";
import Membro from './Membro';
import Padrao from "../../estilo/Padrao";


export default props => {
  return(
    <Text style={Padrao.txtG}>
        {props.nome} {props.sobrenome}
    </Text>
  )
}