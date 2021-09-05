import React, {useState} from 'react';
import {
  Container,
  Resultado,
  Label,
  Botoes,
  ButtonText,
  ButtonContainer,
} from './styles';


export default function Main() {
  const [currentNumber, setCurrentNumber] = useState('');

  function Button(buttonPressed) {
    if (buttonPressed === 'DEL')
    {
      setCurrentNumber(currentNumber.substring(0,(currentNumber.length - 1)))
      return
    }
    if (buttonPressed === 'AC')
    {
      setCurrentNumber('')
      return
    }
    if (buttonPressed === '=')
    {
      calcular()
      return
    }
    setCurrentNumber(currentNumber + buttonPressed);

  }

  function calcular() {
    try{
      setCurrentNumber(eval(currentNumber).toString())
    }catch(err){
        setCurrentNumber('ERRO')
    }

  }

  const buttons = [
    'AC',
    'DEL',
    '%',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '.',
    '0',
    '+/-',
    '=',
  ];
  return (
    <Container>
      <Resultado>
        <Label>{currentNumber}</Label>
      </Resultado>
      <ButtonContainer>
        {buttons.map(button => (
          <Botoes key={button} onPress={() => Button(button)}>
            <ButtonText>{button}</ButtonText>
          </Botoes>
        ))}
      </ButtonContainer>
    </Container>
  );
}
