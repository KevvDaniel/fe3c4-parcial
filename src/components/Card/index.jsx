//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import MsnError from "./MsnError";
import MsnCorrecto from "./MsnCorrecto";

function Card({isMensajeError, informacion}) {

  return (
    <>
    {isMensajeError=="true" &&
      <MsnError/>
    }
    {isMensajeError=="false" &&
      <MsnCorrecto
        nombre={informacion.nombre}
        animal={informacion.animal}
      />
    }
    </>
  );
}



export default Card;
