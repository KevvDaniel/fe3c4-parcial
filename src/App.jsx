import { useState } from 'react'
import Card from './components/Card';
import Form from './components/form';

function App() {
  const [informacion, setInformacion] = useState({});
  const [isMensajeError, setMensajeError] = useState(); 
  
  const onSubmit = (ingreso) => {
    if (ingreso.nombre.length >= 3 
      && ingreso.mascota.length >= 6){
        // Si la validación se cumple, se actualiza
        console.log("ingreso si: ", ingreso);
        setInformacion(ingreso);
        setMensajeError("false")
      }else{
        setMensajeError("true")
        console.log("ingreso no: ", ingreso);

    }
  }
  
  return (
    <div className="App">
      <Form 
        onSubmit={onSubmit} 
        titulo="Formulario de mascotas"
        isMensajeError={isMensajeError}
        informacion={informacion}
      />
      <br />
      <Card
        isMensajeError={isMensajeError}
        informacion={informacion}
        />
      <br />
      <h5>Dev: Kevin Baque</h5>
    </div>
  );
}

export default App;
