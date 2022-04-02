import React, { useState } from 'react'

export default function Ficha(props) {
    const [ imagen, setImagen ] = useState(props.icono);
    const [ clase , setClase ] = useState("ficha");
    const [ nombre, setNombre ] = useState("");
    const [ div, setDiv ] = useState("ficha-div");

    const clickImagen = () => {
        if(clase === "ficha"){
            setImagen(props.icono2);
            setClase("ficha-elegida");
            setNombre(props.nombreIcono);
            setDiv("ficha-div-click");
        }else{
            setImagen(props.icono);
            setClase("ficha");
            setNombre("");
            setDiv("ficha-div");
        }
    }

    return (
        <div className={div}>
            <img onClick={() => clickImagen()} className={clase} src={imagen} alt={props.name}/>
            <h2>{nombre}</h2>
        </div>
    )
}
