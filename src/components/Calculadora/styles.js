import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: #22222a;
  flex: 1;
`;
export const Resultado = styled.View`
  width: 100%;
  height: 75px;
  background-color: #282829;
  padding: 8px;
  margin-top: 5px;
`;
export const Label = styled.Text`
  align-self: flex-end;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;
  justify-content: center;
`;
export const Botoes = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #303336;
  height: 105px;
  width: 98px;
  margin: 1px;
  border-radius: 5px;
`;
export const ButtonText = styled.Text`
  align-self: center;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;
