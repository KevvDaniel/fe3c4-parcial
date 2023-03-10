import React from 'react'
import { useState } from 'react'

// recibe como props desde App - Form
function Form({onSubmit, titulo}) {

    const[nombre, setNombre] = useState ("");
    const[animal, setAnimal] = useState ("");
    
    const handlerChangeNombre = (e) => {
        //Hacer validaciones
        //if(e.target.value.length > 3){}
        //console.log(e.target.value);
        setNombre(e.target.value);
    }

    const handlerChangeAnimal = (e) => {
        setAnimal(e.target.value);
    }

    // console.log("valor del nombre es: ", nombre);
    // console.log("valor del animal es: ", animal);

    const handlerSubmit = (e) => {
        // llama a la funcion prenenir default para que al dar clic en el boton "enviar" la pagina no se recargue automaticamente
        e.preventDefault();

        const data = {
            nombre,
            animal
        }
        // utiliza la funcion onSubmit del padre y se le cargan "data" que son las variables que contienen los datos de nombre y animal recibidos en el formulario
        onSubmit(data)
    }

    return (
        <form onSubmit={handlerSubmit}>{/* aqui deberias escribir tu codigo */}
            <h1>{titulo}</h1> {/**Acá uso una de las props */}
            <input 
                id="name"
                type="text" 
                name="nombre"
                value={nombre}
                placeholder="Nombre (mayor a 3 caracteres)"
                onChange={handlerChangeNombre}
            />
            <br />

            <input
                id="animal"
                type="text" 
                name="animal" 
                value={animal}
                placeholder="Animal favorito (mayor a 6 caracteres)"
                onChange={handlerChangeAnimal}
            />
            <br />
            <input id="btn-enviar" type="submit" />

            
        </form>
    )
}

export default Form