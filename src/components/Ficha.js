import React, { useState } from 'react';
import youtube from '../Imagenes/youtube.png';


export default function Ficha(props) {
    const [ imagen, setImagen ] = useState(props.icono);
    const [ clase , setClase ] = useState("ficha");
    const [ nombre, setNombre ] = useState("");
    const [ div, setDiv ] = useState("ficha-div");
    const [ reproductor, setReproductor] = useState("");
    const [ link, setLink] = useState("")

    const clickImagen = () => {
        if(clase === "ficha"){
            setImagen(props.icono2);
            setClase("ficha-elegida");
            setNombre(props.nombreIcono);
            setDiv("ficha-div-click");
            setReproductor(<audio  className="audio" id="idAudio" src={props.audio} controls />);
            setLink(<a href={props.link} title="Ir a YOUTUBE" target="_blank"><img className="link" src={youtube} alt={props.nombreIcono}/></a>);
        }else{
            setImagen(props.icono);
            setClase("ficha");
            setNombre("");
            setDiv("ficha-div");
            setReproductor("");
            setLink("");
        }
    }


    return (
        <div className={div}>
            <h2>{nombre}</h2>
            <img onClick={() => clickImagen()} className={clase} src={imagen} alt={props.name}/>
                <div>{reproductor}{link}</div>
        </div>
    )
}
