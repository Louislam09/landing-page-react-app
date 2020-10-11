import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';

function App() {

  const [ result, setResult ] = useState({
    firstFruit: 0,
    tithe: 0,
    total: 0
  })

  return (
    <div className="App">
      
      <Header title='Calculadora de Maser'/>

      <div className="container">
        <div className="row">
          <div className="formulario col l6 m6 s12">
            <Form 
              setResult={setResult}
            />
          </div>
          
          <div className="col l6 m6 s12">
            <Result 
              result={result}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
