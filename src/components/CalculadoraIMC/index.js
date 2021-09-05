import React, {useState} from 'react';
import {
  Container,
  TittleApp,
  TittleContainer,
  DetailsContainer,
  CardSexo,
  CardAltura,
  TittleIcon,
  LabelTittle,
  LabelAltura,
  AlturaContainer,
  CardFooter,
  PesoTittle,
  PlusButton,
  Buttons,
  MinusButton,
  Calcular,
  LabelCalcular,
  InputAltura,
  InputPeso,
  InputIdade,
} from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {KeyboardAvoidingView} from 'react-native';

export default function Main() {
  const [countPeso, setCountPeso] = useState(60);
  const [countIdade, setCountIdade] = useState(18);
  const [countAltura, setcountAltura] = useState('180');

  const [resultado, setResultado] = useState();
  const [resultadoIMC, setResultadoIMC] = useState();

  const AlturaNumero = parseInt(countAltura) / 100;
  const PesoNumero = parseInt(countPeso);
  const IdadeNumero = parseInt(countIdade);

  function CalcularResultado() {
    const IMC = PesoNumero / Math.pow(AlturaNumero, 2);

    if (IMC < 18.5) {
      setResultadoIMC(IMC.toFixed(2));
      setResultado('Abaixo do Peso');
      console.log(IMC);
    } else if (IMC > 18.5 && IMC < 24.9) {
      setResultadoIMC(IMC.toFixed(2));
      setResultado('Peso Normal');
    } else if (IMC > 25 && IMC < 29.9) {
      setResultadoIMC(IMC.toFixed(2));
      setResultado('Pré-obesidade');
    } else if (IMC > 30 && IMC < 34.9) {
      setResultadoIMC(IMC.toFixed(2));
      setResultado('Obesidade Grau 1');
    } else if (IMC > 35 && IMC < 39.9) {
      setResultadoIMC(IMC.toFixed(2));
      setResultado('Obesidade Grau 2');
    } else if (IMC > 40) {
      setResultadoIMC(IMC.toFixed(2));
      setResultado('Obesidade Grau 3');
    }

    return null;
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: '#22222a'}}
      behavior="position">
      <Container>
        <TittleContainer>
          <TittleApp>
            Calculadora IMC = {resultadoIMC} {resultado}
          </TittleApp>
        </TittleContainer>
        <DetailsContainer>
          <CardSexo>
            <Ionicons name="male" size={50} color="white" />
            <TittleIcon>Homem</TittleIcon>
          </CardSexo>
          <CardSexo>
            <Ionicons name="female" size={50} color="white" />
            <TittleIcon>Mulher</TittleIcon>
          </CardSexo>
        </DetailsContainer>
        <DetailsContainer>
          <CardAltura>
            <LabelTittle>Altura</LabelTittle>
            <AlturaContainer>
              <InputAltura
                maxLength={3}
                keyboardType="numeric"
                textAlign={'center'}
                onChangeText={text => setcountAltura(text)}
                value={countAltura}
              />
              <LabelTittle>Cm</LabelTittle>
            </AlturaContainer>
          </CardAltura>
        </DetailsContainer>
        <DetailsContainer>
          <CardFooter>
            <PesoTittle>Peso (KG)</PesoTittle>
            <InputPeso
              maxLength={3}
              keyboardType="numeric"
              textAlign={'center'}
              onChangeText={text => setCountPeso(text)}
              value={countPeso.toString()}
            />
            <Buttons>
              <PlusButton onPress={() => setCountPeso(PesoNumero + 1)}>
                <Fontisto name="plus-a" size={20} color="white" />
              </PlusButton>
              <MinusButton onPress={() => setCountPeso(countPeso - 1)}>
                <Fontisto name="minus-a" size={20} color="white" />
              </MinusButton>
            </Buttons>
          </CardFooter>
          <CardFooter>
            <PesoTittle>Idade</PesoTittle>
            <InputIdade
              maxLength={3}
              keyboardType="numeric"
              textAlign={'center'}
              onChangeText={text => setCountIdade(text)}
              value={countIdade.toString()}
            />
            <Buttons>
              <PlusButton onPress={() => setCountIdade(IdadeNumero + 1)}>
                <Fontisto name="plus-a" size={20} color="white" />
              </PlusButton>
              <MinusButton onPress={() => setCountIdade(countIdade - 1)}>
                <Fontisto name="minus-a" size={20} color="white" />
              </MinusButton>
            </Buttons>
          </CardFooter>
        </DetailsContainer>
        <Calcular onPress={() => CalcularResultado()}>
          <LabelCalcular>Calcular</LabelCalcular>
        </Calcular>
      </Container>
    </KeyboardAvoidingView>
  );
}
