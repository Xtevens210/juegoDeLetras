import React, { useState } from 'react'
import BlueAudio from '../audios/LasPistasDeBlue.mp3';


export default function Ficha(props) {
    const [ imagen, setImagen ] = useState(props.icono);
    const [ clase , setClase ] = useState("ficha");
    const [ nombre, setNombre ] = useState("");
    const [ div, setDiv ] = useState("ficha-div");
    const [ reproductor, setReproductor] = useState("");

    const clickImagen = () => {
        if(clase === "ficha"){
            setImagen(props.icono2);
            setClase("ficha-elegida");
            setNombre(props.nombreIcono);
            setDiv("ficha-div-click");
            setReproductor(<audio  className="audio" id="idAudio" src={props.audio} controls />);
        }else{
            setImagen(props.icono);
            setClase("ficha");
            setNombre("");
            setDiv("ficha-div");
            setReproductor("");
        }
    }


    return (
        <div className={div}>
            <img onClick={() => clickImagen()} className={clase} src={imagen} alt={props.name}/>
                <div>{reproductor}</div>
            <h2>{nombre}</h2>
        </div>
    )
}
