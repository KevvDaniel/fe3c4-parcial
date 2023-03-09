import { useState } from 'react'
import Card from './Card.jsx'

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  
  const[nombre, setNombre] = useState ("")
  const[animal, setAnimal] = useState ("")

  const handleChange = (e) => {
    if(e.target.value.length > 3){
      console.log(e.target.value);
      setNombre(e.target.value);
    }
  }
  const handleChangeAnimal = (e) => {
    if(e.target.value.length > 6){
      console.log(e.target.value)
    }
  }


  return (
    <div className="App">
      <h1>Formulario</h1>
      <form>{/* aqui deberias escribir tu codigo */}
        <input 
          id="name"
          type="text" 
          name="nombre"
          value={nombre}
          placeholder="Nombre (mayor a 3 caracteres"
          onChange={handleChange}
          />
        <br />

        <input
          id="name"
          type="text" 
          name="animal" 
          placeholder="Animal favorito (mayor a 6 caracteres"
          onChange={handleChangeAnimal}
          />
        <br />

        <button type="submit" value="Enviar">
          Enviar
        </button>

        <p id="msn-error" >Por favor chequea que la informacion sea correcta</p>
        <Card/>
      
      </form>
      <h5>Wilson Alzate</h5>
    </div>
  );
}

export default App;
