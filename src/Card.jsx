//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({nombre, animal}) {
  return (
    <div id="card">
      <h2>Card para mostrar valores del formulario</h2>
        <p>Nombre: {nombre}</p>
        <p>Animal: {animal}</p>
    </div>
  );
}

export default Card;
