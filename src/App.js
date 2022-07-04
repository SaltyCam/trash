import './App.css';
import {useState} from 'react';
import Axios from 'axios';
import Menu from './Menu';
import Button from './Button';


function App() {
  // Character_details db
  let [clas, setClass] = useState('');
  let [level, setLevel] = useState('');
  let [circlet, setCirclet] = useState('');
  let [pendant, setPendant] = useState();
  let [belt, setBelt] = useState();
  let [cloak, setCloak] = useState();

  //Character_brooches db
  let [onyx, setOnyx] = useState();
  let [zircon, setZircon] = useState();
  let [coral, setCoral] = useState();
  let [spinel, setSpinel] = useState();
  let [moonstone, setMoonstone] = useState();
  let [amber, setAmber] = useState();
  let [opal, setOpal] = useState();
  let [beryl, setBeryl] = useState();

  //Character_talismans db
  let [aden, setAden] = useState();
  let [speed, setSpeed] = useState();
  let [eva, setEva] = useState();
  let [authority, setAuthority] = useState();
  let [venir, setVenir] = useState();

  let [characterData, setCharacterData] = useState();
  let [condition, setCondition] = useState();

  let conditioner = (inputed) =>{
    setCondition(inputed)
    console.log(inputed);
  }

  

  let fetchData = () => {
    Axios.get('http://35.217.12.89:3001/get').then((res) =>{
    //Axios.get('http://localhost:3001/get').then((res) =>{
      console.log(res);
      setCharacterData(res.data)

    })
  }

  let sendData = () => {
    Axios.post('http://localhost:3001/post', {
      clas: clas,
      level: level,
      circlet: circlet,
      pendant: pendant,
      belt: belt,
      cloak: cloak
    }).then(()=> {
      console.log('OK');
    })
  }
  
  return (
    <div className="App">
      <div className="result-table">
        <button onClick={fetchData}>SHOW</button>
        <table>
          <tr>
            <th>Class</th>
            <th>LvL</th>
            <th>Circ</th>
            <th>Pend</th>
            <th>Belt</th>
            <th>Cloak</th>
            <th id='brooches'>Onyx</th>
            <th id='brooches'>Zirc</th>
            <th id='brooches'>Spin</th>
            <th id='brooches'>Coral</th>
            <th id='brooches'>Moons</th>
            <th id='brooches'>Amber</th>
            <th id='brooches'>Opal</th>
            <th id='brooches'>Beryl</th>
            <th id='agathions'>Ignis</th>
            <th id='agathions'>Proc</th>
            <th id='agathions'>Nebu</th>
            <th id='agathions'>Petr</th>
            <th id='agathions'>Joy</th>
            <th id='talismans'>Aden</th>
            <th id='talismans'>Eva</th>
            <th id='talismans'>Speed</th>
            <th id='talismans'>Author</th>
            <th id='talismans'>Venir</th>
          </tr>
          {characterData && 
          characterData.map((object)=> {
            return <tr>
              <td>{object.class}</td>
              <td>{object.level}</td>
              <td>{object.circlet}</td>
              <td>{object.belt}</td>
              <td>{object.pendant}</td>
              <td>{object.cloak}</td>
              <td>{object.onyx}</td>
              <td>{object.zircon}</td>
              <td>{object.spinel}</td>
              <td>{object.coral}</td>
              <td>{object.moonstone}</td>
              <td>{object.amber}</td>
              <td>{object.opal}</td>
              <td>{object.beryl}</td>
              <td>{object.ignis}</td>
              <td>{object.procella}</td>
              <td>{object.nebula}</td>
              <td>{object.petram}</td>
              <td>{object.joy}</td>
              <td>{object.aden}</td>
              <td>{object.eva}</td>
              <td>{object.speed}</td>
              <td>{object.authority}</td>
              <td>{object.venir}</td>
            </tr>
          })}
        </table>
      </div>

    </div>
  );
}

export default App;
