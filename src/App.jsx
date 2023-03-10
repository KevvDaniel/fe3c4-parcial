import { useState } from 'react'
import Card from './components/Card';
import Form from './components/form';

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  
  // ----- VER VIDEO 1:50:03 ---------------//
  //Falta
  // Hacer validaciones
  
  const [informacion, setInformacion] = useState({}); {/**useState setea un objeto*/}
  const [isMensajeError, setMensajeError] = useState(); {/**useState setea un objeto*/}
  
  // funcion dentro el padre "App" que se le pasa como "props" al hijo "Form"
  // las props son de solo lectura, el hijo no puede modificarlas
  const onSubmit = (data) => {
    if (data.nombre.length >= 3 
      && data.animal.length >= 6){
        // si cumple la validacion, actualiza el estado de la "informacion"
        console.log("data si: ", data);
        setInformacion(data);
        setMensajeError("false")
      }else{
        setMensajeError("true")
        console.log("data no: ", data);

    }
  }
  
  return (
    <div className="App">
      <Form 
        onSubmit={onSubmit} 
        titulo="Formulario animal"
        isMensajeError={isMensajeError}
        informacion={informacion}
      />
      <br />
      <Card
        isMensajeError={isMensajeError}
        informacion={informacion}
        />
      <br />
      <h5>Wilson Alzate</h5>
    </div>
  );
}

export default App;
