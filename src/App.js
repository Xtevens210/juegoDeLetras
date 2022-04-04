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
import LetraD from './Imagenes/letra-d.png';
import LetraE from './Imagenes/letra-e.png';
import LetraJ from './Imagenes/letra-j.png';
import LetraF from './Imagenes/letra-f.png';
import LetraW from './Imagenes/letra-w.png';
import LetraI from './Imagenes/letra-i.png';
import LetraK from './Imagenes/letra-k.png';
import LetraQ from './Imagenes/letra-q.png';
import LetraR from './Imagenes/letra-r.png';
import LetraS from './Imagenes/letra-s.png';
import LetraU from './Imagenes/letra-u.png';
import LetraX from './Imagenes/letra-x.png';
import LetraY from './Imagenes/letra-y.png';
import LetraZ from './Imagenes/letra-z.png';
import Interogante from './Imagenes/signo-de-interrogacion.png';

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
import Dexter from './Imagenes/dexter.png';
import Encanto from './Imagenes/Encanto.png';
import Jerry from './Imagenes/jerry.png';
import Furia from './Imagenes/furia.png';
import WinniePooh from './Imagenes/winniePoh.png';
import HeroesPijamas from './Imagenes/heroesEnPijama.png';
import Increibles from './Imagenes/Increibles.png';
import Kermit from './Imagenes/kermit.png';
import QueenAbeja from './Imagenes/queenAbeja.png';
import Rex from './Imagenes/rex.png';
import Stich from './Imagenes/stich.png';
import UnderDog from './Imagenes/underdog.png';
import XMen from './Imagenes/xMen.png';
import Yeti from './Imagenes/yeti.png';
import Zeus from './Imagenes/Zeus.png';
import BlueyBingo from './Imagenes/blueyBingo.png';

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
import DexterAudio from './audios/dexterAudio.mp3';
import EncantoAudio from './audios/EncantoAudio.mp3';
import TomJerryAudio from './audios/tomJerryAudio.mp3';
import Intensamente from './audios/intensamente.mp3';
import WinnieAudio from './audios/winniePoh.mp3';
import HeroesPijamasAudio from './audios/heroesEnPijama.mp3';
import IncreiblesAudio from './audios/increibles cancion.mp3';
import MuppetsAudio from './audios/muppetsAudio.mp3';
import QueenAbejaAudio from './audios/queenAbejaAudio.mp3';
import ToyStoryAudio from './audios/toyStory.mp3';
import StichAudio from './audios/stichAudio.mp3';
import UnderdogAudio from './audios/underdogAudio.mp3';
import XMenAudio from './audios/xMenAudio.mp3';
import MonstersInAudio from './audios/monsterIncAudio.mp3';
import HerculesAudio from './audios/herculesAudio.mp3';
import BlueyBingoAudio from './audios/BlueyBingo.mp3';

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
      <Ficha icono={LetraD} icono2={Dexter} nombreIcono="Dexter" name="Letra D" audio={DexterAudio} link="https://www.youtube.com/watch?v=DkNkuq35Oy8&list=PL-KjNj8zF3RPoiFNFt-n6Wf3R8K54UHu0"/>
      <Ficha icono={LetraE} icono2={Encanto} nombreIcono="Encanto" name="Letra E" audio={EncantoAudio} link="https://www.youtube.com/watch?v=wTi8yLyHeb8"/>
      <Ficha icono={LetraF} icono2={Furia} nombreIcono="Furia" name="Letra F" audio={Intensamente} link="https://www.youtube.com/watch?v=uUl-P-ujReQ&list=PL8mImF3epTVsi4UP-igTH-sz8EuE3WRR7"/>
      <Ficha icono={LetraG} icono2={Goku} nombreIcono="Goku" name="Letra G" audio={DragonBallAudio} link="https://www.youtube.com/watch?v=AvMT4Aquasc&list=PLEPPMZPjXfINH3RxAbbFyAbBsQsJZErmm"/>
      <Ficha icono={LetraH} icono2={HeroesPijamas} nombreIcono="Heroes En Pijamas" name="Letra H" audio={HeroesPijamasAudio} link="https://www.youtube.com/watch?v=1xEvkxLU1Uk&list=PLZPmpoFCO8K7pI2EsU4OkjlEiFF-XSuzb"/>
      <Ficha icono={LetraI} icono2={Increibles} nombreIcono="Increibles" name="Letra I" audio={IncreiblesAudio} link="https://www.youtube.com/watch?v=FAFFG3FvCtQ&list=PLeumbFZsdLylptNZwLsPWGxD3lpceriIu"/>
      <Ficha icono={LetraJ} icono2={Jerry} nombreIcono="Jerry" name="Letra J" audio={TomJerryAudio} link="https://www.youtube.com/watch?v=iN-bcfCEzF4&list=PLpPkJYhcdhYbNykXd_EyIzKXChjt8n6M8&index=2"/>
      <Ficha icono={LetraK} icono2={Kermit} nombreIcono="Kermit" name="Letra K" audio={MuppetsAudio} link="https://www.youtube.com/watch?v=DyoGTxkhw18&list=PLj4SAFyoWC0BHs-LZuaIFrHp99aDq60Dn"/>
      <Ficha icono={LetraL} icono2={LucasAraña} nombreIcono="Lucas La Araña" name="Letra L" audio={LucasArañaAudio} link="https://www.youtube.com/watch?v=bjxvf7vZuq4"/>
      <Ficha icono={LetraM} icono2={MinieMouse} nombreIcono="Minie Mouse" name="Letra M" audio={MickyMouseAudio} link="https://www.youtube.com/watch?v=MveUdv8VxMk&list=PLpB5fBabXdoWnixsHxWyo6AA4lr8b34Hy"/>
      <Ficha icono={LetraO} icono2={Olaf} nombreIcono="Olaf" name="Letra O" audio={OlafAudio} link="https://www.youtube.com/watch?v=CaK5vz6B1r0&list=PLiNVoBckLqLk5QeChEGK-4k3rYceryeUw"/>
      <Ficha icono={LetraP} icono2={Pikachu} nombreIcono="Pikachu" name="Letra P" audio={PokemonAudio} link="https://www.youtube.com/watch?v=uDIoEbbFKAY&list=PLRhT4-rJUyveV3QGGFbghKQZ5g5Ta75FH&index=2"/>
      <Ficha icono={LetraQ} icono2={QueenAbeja} nombreIcono="Queen Abeja" name="Letra Q" audio={QueenAbejaAudio} link="https://www.youtube.com/watch?v=bQXY7Tnwi20&t=16s"/>
      <Ficha icono={LetraR} icono2={Rex} nombreIcono="Rex" name="Letra R" audio={ToyStoryAudio} link="https://www.youtube.com/watch?v=1X32z0YVWvg&list=PL4JN7Q6UwE7IJO7_VSEBW_CK689BwhoIp"/>
      <Ficha icono={LetraS} icono2={Stich} nombreIcono="Stich" name="Letra S" audio={StichAudio} link="https://www.youtube.com/watch?v=KtsV4bWPHsY&list=PLplujYajPCTA6ezwkTCAEFJIrP5Nb3UjK"/>
      <Ficha icono={LetraT} icono2={BabyShark} nombreIcono="Tiburon Bebe" name="Letra T" audio={BabySharkAudio} link="https://www.youtube.com/watch?v=irxVbTygChE&list=PLXJZReOlh8yLu_ZlzrnnhZv-PQN2pGrtD"/>
      <Ficha icono={LetraU} icono2={UnderDog} nombreIcono="UnderDog" name="Letra U" audio={UnderdogAudio} link="https://www.youtube.com/watch?v=KlP6ucm6qS4"/>
      <Ficha icono={LetraV} icono2={VacaLola} nombreIcono="Vaca Lola" name="Letra V" audio={VacaLolaAudio} link="https://www.youtube.com/watch?v=7_lNBerhBq4&list=PLwUxYVNN22j-pRJDr_a_9L05_gcasast-"/>
      <Ficha icono={LetraW} icono2={WinniePooh} nombreIcono="Winnie Pooh" name="Letra W" audio={WinnieAudio} link="https://www.youtube.com/watch?v=jQGgal7UaPU&list=PLjOSc_Mznivcp5IKMMkXDMqjXOBW6MyPL"/>
      <Ficha icono={LetraX} icono2={XMen} nombreIcono="X-men" name="Letra X" audio={XMenAudio} link="https://www.youtube.com/watch?v=IwEks8ty5TI&list=PL3oa5Dnk2KRfSoLnd-a9FcoGvgmP28fu6"/>
      <Ficha icono={LetraY} icono2={Yeti} nombreIcono="Yeti-Monsters Inc" name="Letra Y" audio={MonstersInAudio} link="https://www.youtube.com/watch?v=l-aEaxpC9CE&list=PLI0QEEWhf83bb-wK4zHXXcrAhhUP-gSdj"/>
      <Ficha icono={LetraZ} icono2={Zeus} nombreIcono="Zeus-Hercules" name="Letra Z" audio={HerculesAudio} link="https://www.youtube.com/watch?v=QLyz0AIbzIo"/>
      <Ficha icono={Interogante} icono2={HakunaMatata} nombreIcono="Hakuna Matata" name="Interrogante" audio={HakunaMatataAudio} link="https://www.youtube.com/watch?v=oPCRbYT6M7A&list=PLt-oe_SIwEuTirCGthW98h5Gv6lcCAR7f"/>
      <Ficha icono={Interogante} icono2={BlueyBingo} nombreIcono="Bluey y Bingo" name="Interrogante" audio={BlueyBingoAudio} link="https://www.youtube.com/watch?v=ToY-UBAvCek&list=PL_0BB1yzZzOdefHvS-QWCMj47wvy55cja"/>
    </div>
  );
}

export default App;
