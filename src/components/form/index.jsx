import React from 'react'
import { useState } from 'react'

function Form({onSubmit, titulo}) {

    const[nombre, setNombre] = useState ("");
    const[mascota, setMascota] = useState ("");
    
    const handlerChangeNombre = (e) => {
        setNombre(e.target.value);
    }

    const handlerChangeMascota = (e) => {
        setMascota(e.target.value);
    }

    const handlerSubmit = (e) => {
        e.preventDefault();

        const ingreso = {
            nombre,
            mascota
        }
        //ingreso contiene el Nombre y la mascota
        onSubmit(ingreso)
    }

    return (
        <form onSubmit={handlerSubmit}>
            <h1>{titulo}</h1> 
            <input 
                id="name"
                type="text" 
                name="nombre"
                value={nombre}
                placeholder="Tu Nombre (Debe ser mayor a 3 caracteres)"
                onChange={handlerChangeNombre}
            />
            <br />

            <input
                id="mascota"
                type="text" 
                name="mascota" 
                value={mascota}
                placeholder="Tu mascota favorita (mayor a 6 caracteres)"
                onChange={handlerChangeMascota}
            />
            <br />
            <input id="btn-enviar" type="submit" />

            
        </form>
    )
}

export default Form