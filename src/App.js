import './App.css';
import { useState } from 'react';
import Ficha from './components/Ficha';
import LetraA from './Imagenes/carta-a.png';
import Avion from './Imagenes/avion.png'
import LetraB from './Imagenes/letra-b.png'
import Ballena from './Imagenes/ballena.png'
import BotonesColor from './components/BotonesColor';
import ImagenDeFondo from './components/ImagenDeFondo';
import FondoWeb1 from './Imagenes/FondoWeb-default.jpg';
import FondoWebAzul from './Imagenes/FondoWeb-azul.jpg';
import FondoWebRojo from './Imagenes/FondoWeb-rojo.jpg';
import FondoWebVerde from './Imagenes/FondoWeb-verde.jpg';
import FondoWebRosa from './Imagenes/FondoWeb-rosa.jpg';





function App() {
  const [fondo, setFondo] = useState(FondoWeb1);

  const cambioDeFondo = (color) => {
    if(color === "Azul"){
      setFondo(FondoWebAzul);
    }else if(color === "Rojo"){
      setFondo(FondoWebRojo);
    }else if(color === "Verde"){
      setFondo(FondoWebVerde);
    }else{
      setFondo(FondoWebRosa);
    }
  }


  return (
    <div className='container contenedor-fichas'>
      <h1 className='titulo'>JUEGO DE LETRAS</h1>
      <ImagenDeFondo imagen={fondo}/>
      <BotonesColor color="Azul" funcion={cambioDeFondo} claseLabel="boton-azul-label" claseDiv="boton-azul-div"/>
      <BotonesColor color="Verde" funcion={cambioDeFondo} claseLabel="boton-verde-label" claseDiv="boton-verde-div"/>
      <BotonesColor color="Rojo" funcion={cambioDeFondo} claseLabel="boton-rojo-label" claseDiv="boton-rojo-div"/>
      <BotonesColor color="Rosa" funcion={cambioDeFondo} claseLabel="boton-rosa-label" claseDiv="boton-rosa-div"/>
      <Ficha icono={LetraA} icono2={Avion} nombreIcono="Avion" name="Letra A"/>
      <Ficha icono={LetraB} icono2={Ballena} nombreIcono="Ballena" name="Letra B"/>
      <Ficha icono={LetraB} icono2={Ballena} nombreIcono="Ballena" name="Letra B"/>
      <Ficha icono={LetraB} icono2={Ballena} nombreIcono="Ballena" name="Letra B"/>
      <Ficha icono={LetraB} icono2={Ballena} nombreIcono="Ballena" name="Letra B"/>
      <Ficha icono={LetraB} icono2={Ballena} nombreIcono="Ballena" name="Letra B"/>
      <Ficha icono={LetraB} icono2={Ballena} nombreIcono="Ballena" name="Letra B"/>
      <Ficha icono={LetraB} icono2={Ballena} nombreIcono="Ballena" name="Letra B"/>
      <Ficha icono={LetraB} icono2={Ballena} nombreIcono="Ballena" name="Letra B"/>
    </div>
  );
}

export default App;
