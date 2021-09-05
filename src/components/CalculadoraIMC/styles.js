import styled from 'styled-components/native';
import {TouchableOpacity, TextInput} from 'react-native';


export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: #22222a;
`;
export const TittleApp = styled.Text`
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  marginVertical: 20px;
`;
export const TittleContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
export const DetailsContainer = styled.View`
  marginHorizontal: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const CardSexo = styled.TouchableOpacity`
  background-color: #111327;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
export const TittleIcon = styled.Text`
  justify-content: center;
  align-items: center;
  color: darkgray;
  font-size: 14px;
`;
export const CardAltura = styled.View`
  background-color: #111327;
  width: 100%;
  height: 150px;
  border-radius: 10px;
  align-items: center;
  marginVertical: 20px;
`;

export const AlturaContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const LabelTittle = styled.Text`
  justify-content: center;
  align-items: center;
  color: darkgray;
  font-size: 14px;
  marginVertical: 14px;
`;
export const LabelAltura = styled.Text`
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 50px;
  font-weight: bold;
`;
export const CardFooter = styled.View`
  background-color: #111327;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
export const PesoTittle = styled.Text`
  justify-content: center;
  align-items: center;
  color: darkgray;
  font-size: 14px;
`;
export const PlusButton = styled.TouchableOpacity`
  background-color: #4c4f5d;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
export const Buttons = styled.View`
  flex-direction: row;
`;
export const MinusButton = styled.TouchableOpacity`
  background-color: #4c4f5d;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
export const Calcular = styled.TouchableOpacity`
  margin-top: 50px;
  background-color: #1a0089;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const LabelCalcular = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
`;
export const InputAltura = styled.TextInput`
  height: 80px;
  width: 100px;
  margin: 12px;
  color: #fff;
  font-size: 50px;
  font-weight: bold;
`;
export const InputPeso = styled.TextInput`
  height: 80px;
  width: 90px;
  color: #fff;
  font-size: 50px;
  font-weight: bold;
`;
export const InputIdade = styled.TextInput`
  height: 80px;
  width: 90px;
  color: #fff;
  font-size: 50px;
  font-weight: bold;
`;
export const resultadoText = styled.Text`
  font-size: 50px;
  font-weight: bold;
`;
export const CardSexoSelecionado = styled.TouchableOpacity`
  background-color: #fff;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  opacity: 0;
`;
