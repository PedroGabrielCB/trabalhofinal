import React from 'react';
import {View, Text} from 'react-native';

import Padrao from '../estilo/Padrao';

export default props => [<Text style={Padrao.ex} key={1}> Arrow Function: {props.texto}</Text>];
