import React from "react";
import {View} from 'react-native'
import Padrao from "../estilo/Padrao";

export default props => {
  return(
    <View style={{width: '100%',height: '100%', flexDirection:'column', justifyContent: 'center',alignItems:'stretch'}}>
      <View style={{ flexGrow: 1,backgroundColor: 'powderblue'}} />
      <View style={{ flexGrow: 1, backgroundColor: 'skyblue'}} />
      <View style={{ flexGrow: 1, backgroundColor: 'steelblue'}} />
    </View>
  )
}