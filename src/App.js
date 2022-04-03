import './App.css';
import { useState } from 'react';
//Importaciones
//Componentes
import Ficha from './components/Ficha';
import BotonesColor from './components/BotonesColor';
import ImagenDeFondo from './components/ImagenDeFondo';
import FondoWeb1 from './Imagenes/FondoWeb-default.jpg';
import FondoWebAzul from './Imagenes/FondoWeb-azul.jpg';
import FondoWebRojo from './Imagenes/FondoWeb-rojo.jpg';
import FondoWebVerde from './Imagenes/FondoWeb-verde.jpg';
import FondoWebRosa from './Imagenes/FondoWeb-rosa.jpg';

//Letras
import LetraA from './Imagenes/carta-a.png';
import LetraB from './Imagenes/letra-b.png';
import LetraH from './Imagenes/letra-h.png';
import LetraC from './Imagenes/letra-c.png';
import LetraO from './Imagenes/letra-o.png';
import LetraP from './Imagenes/letra-p.png';
import LetraG from './Imagenes/letra-g.png';
import LetraT from './Imagenes/letra-t.png';
import LetraV from './Imagenes/letra-v.png';
import LetraM from './Imagenes/letra-m.png';
import LetraL from './Imagenes/letra-l.png';

//Imagenes
import LasPistasDeBlue from './Imagenes/lasPistasDeBlue.png';
import HakunaMatata from './Imagenes/HakunaMatata.png';
import AvePañales from './Imagenes/Rugrats.png';
import Bugs from './Imagenes/BugsBunny.png';
import Olaf from './Imagenes/olaf.png';
import Pikachu from './Imagenes/pikachu.png';
import Goku from './Imagenes/goku.png';
import BabyShark from './Imagenes/BabyShark.png';
import VacaLola from './Imagenes/vacaLola.png';
import MinieMouse from './Imagenes/MinieMouse.png';
import LucasAraña from './Imagenes/LucasAraña.png';

//Audios
import BlueAudio from './audios/LasPistasDeBlue.ogg';
import HakunaMatataAudio from './audios/HakunaMatata.mp3';
import AvePañalesAudio from './audios/RugratsAudio.mp3';
import LoneyTunes from './audios/IntroLoneyTunes.mp3';
import OlafAudio from './audios/OlafAudio.mp3';
import PokemonAudio from './audios/pokemonAudio.mp3';
import DragonBallAudio from './audios/dragonBallAudio.mp3';
import BabySharkAudio from './audios/babySharkAudio.mp3';
import VacaLolaAudio from './audios/VacaLolaAudio.mp3';
import MickyMouseAudio from './audios/mickyMouseAudio.mp3';
import LucasArañaAudio from './audios/LucasArañaAudio.mp3';

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
      <Ficha icono={LetraA} icono2={AvePañales} nombreIcono="Aventuras en pañales" name="Letra A" audio={AvePañalesAudio} link="https://www.youtube.com/watch?v=YIte86Os_k0&list=PLJC2CfG2fpdboo4aSGT_J2Lbw0ThIA7GS&index=2"/>
      <Ficha icono={LetraB} icono2={LasPistasDeBlue} nombreIcono="Blue" name="Letra B" audio={BlueAudio} link="https://www.youtube.com/watch?v=S3wSlXgnl-c&list=PL2PbHaJs0TtrnNGzjV8JraYZ_vezmbUI2"/>
      <Ficha icono={LetraC} icono2={Bugs} nombreIcono="Conejo/Bugs Bunny" name="Letra C" audio={LoneyTunes} link="https://www.youtube.com/watch?v=-X7JC9LChXY&list=PLvJKlTXowkBXJf3646UuEbWSVAkJTxIxq"/>
      <Ficha icono={LetraG} icono2={Goku} nombreIcono="Goku" name="Letra G" audio={DragonBallAudio} link="https://www.youtube.com/watch?v=AvMT4Aquasc&list=PLEPPMZPjXfINH3RxAbbFyAbBsQsJZErmm"/>
      <Ficha icono={LetraH} icono2={HakunaMatata} nombreIcono="Hakuna Matata" name="Letra H" audio={HakunaMatataAudio} link="https://www.youtube.com/watch?v=oPCRbYT6M7A&list=PLt-oe_SIwEuTirCGthW98h5Gv6lcCAR7f"/>
      <Ficha icono={LetraL} icono2={LucasAraña} nombreIcono="Lucas La Araña" name="Letra L" audio={LucasArañaAudio} link="https://www.youtube.com/watch?v=bjxvf7vZuq4"/>
      <Ficha icono={LetraM} icono2={MinieMouse} nombreIcono="Minie Mouse" name="Letra M" audio={MickyMouseAudio} link="https://www.youtube.com/watch?v=MveUdv8VxMk&list=PLpB5fBabXdoWnixsHxWyo6AA4lr8b34Hy"/>
      <Ficha icono={LetraO} icono2={Olaf} nombreIcono="Olaf" name="Letra O" audio={OlafAudio} link="https://www.youtube.com/watch?v=CaK5vz6B1r0&list=PLiNVoBckLqLk5QeChEGK-4k3rYceryeUw"/>
      <Ficha icono={LetraP} icono2={Pikachu} nombreIcono="Pikachu" name="Letra P" audio={PokemonAudio} link="https://www.youtube.com/watch?v=uDIoEbbFKAY&list=PLRhT4-rJUyveV3QGGFbghKQZ5g5Ta75FH&index=2"/>
      <Ficha icono={LetraT} icono2={BabyShark} nombreIcono="Tiburon Bebe" name="Letra T" audio={BabySharkAudio} link="https://www.youtube.com/watch?v=irxVbTygChE&list=PLXJZReOlh8yLu_ZlzrnnhZv-PQN2pGrtD"/>
      <Ficha icono={LetraV} icono2={VacaLola} nombreIcono="Vaca Lola" name="Letra V" audio={VacaLolaAudio} link="https://www.youtube.com/watch?v=7_lNBerhBq4&list=PLwUxYVNN22j-pRJDr_a_9L05_gcasast-"/>
    </div>
  );
}

export default App;
