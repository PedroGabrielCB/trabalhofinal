import React, {useState} from 'react'
import {View,TextInput,Text} from 'react-native'
import Padrao from '../estilo/Padrao'

export default props => {

  const [nome,setNome] = useState('teste')
  return(
    <>
      <View style={Padrao.container}>
        <Text>{nome}</Text>
        <TextInput
        style={Padrao.input}
        placeholder="Digite Seu Nome"
        value={nome}
        onChangeText={nome => setNome(nome)}
        />
      </View>
    </>
  )
}