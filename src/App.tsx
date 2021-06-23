import React from 'react';
import './App.css';
import Botao from './componets/button/Botao';
import Input from './componets/input/Input';
import Title from './componets/title/Title';

function Soma(){
  var num1 = document.getElementById("num1") as HTMLInputElement
  var num2 = document.getElementById("num2") as HTMLInputElement
  var result = parseInt(num1.value) + parseInt(num2.value);
  var resultado = result.toString()
  var resultadoFinal =  document.getElementById("resultado") as HTMLParagraphElement
  resultadoFinal.innerHTML = resultado
}

function App() {
  return (
  <div className="App">
    <div className="content">
      <Title text={process.env.REACT_APP_CALCULADORA}/> 
    <div className="input"> 
        <Input inputid="num1"/>
        <Input inputid="num2"/>
    </div>
      <Botao clickid={Soma}/>
      <p id="resultado"></p>
    </div>
  </div>
  );
}

export default App;
