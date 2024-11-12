import React,{useState} from "react";

export const MiPrimerEstado=()=>{
    const [nombre, setNombre] = useState("Nombre Prueba");

    const cambiarNombre = e =>{
        setNombre("Nombre Cambiado");
    }
    const cambiarNombreDobleClick =e =>{
        setNombre("Otro nombre");
    }
    return(
        <div>
            <h3>Componente: Mi primer estado</h3>
            <strong>Nombre:{nombre}</strong>
            <br/>
            <button onClick={cambiarNombre} onDoubleClick={cambiarNombreDobleClick}>Cambiar el Nombre</button>

        </div>
    )
}
