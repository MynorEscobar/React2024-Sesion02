import React,{useState} from "react";

function MiSegundoEstado(){
    const[nombre, setNombre]=useState('');
    const handleChange=(e)=>{
        setNombre(e.target.value);
    };
    return(
        <div>
            <h1>Formulario de nombre</h1>
            <input
                type="text"
                placeholder="Ingree su nombre"
                value={nombre}
                onChange={handleChange}
            />
            
            <p>Hola,{nombre ? nombre:"extraño"}</p>
        
        
        </div>
    );
}
export default MiSegundoEstado;