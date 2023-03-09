import { useState } from 'react'
import Card from './Card.jsx'
import Form from './components/form/index.jsx';

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  
  // ----- VER VIDEO 1:24:15 ---------------//
  //Falta
  // Hacer validaciones
  
  // funcion dentro el padre "App" que se le pasa como "props" al hijo "Form"
  // las props son de solo lectura, el hijo no puede modificarlas
  const onSubmit = (data) => {
    console.log("data: ", data);
  }
  
  return (
    <div className="App">
      <Form 
        onSubmit={onSubmit} 
        titulo="Formulario animal"
      />

      <p id="msn-error" >Por favor chequea que la informacion sea correcta</p>
      <Card nombre="{nombre}" animal="{animal}"/>
      
      <h5>Wilson Alzate</h5>
    </div>
  );
}

export default App;
