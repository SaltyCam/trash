import './App.css';
import {useState} from 'react';
import Axios from 'axios';


const Menu = () => {

  
  
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


  //Character agathions db
  let [ignis, setIgnis] = useState();
  let [petram, setPetram] = useState();
  let [nebula, setNebula] = useState();
  let [procella, setProcella] = useState();
  let [joy, setJoy] = useState();
  

      let [characterData, setCharacterData] = useState();
      let [condition, setCondition] = useState();
      
    
      let fetchData = () => {
        Axios.get('http://localhost:3001/get',).then((res) =>{
          console.log(res.data);
          setCharacterData(res.data)
        })
      }
    
      let sendData = () => {
        Axios.post('http://35.217.12.89:3001/post', {
          clas: clas,
          level: level,
          circlet: circlet,
          pendant: pendant,
          belt: belt,
          cloak: cloak,
          onyx: onyx,
          zircon: zircon,
          coral: coral,
          spinel: spinel,
          amber: amber,
          opal: opal,
          moonstone: moonstone,
          ignis: ignis,
          nebula: nebula,
          petram: petram,
          procella: procella,
          joy: joy,
          aden: aden,
          speed: speed,
          eva: eva,
          authority: authority,
          venir: venir,   
          beryl: beryl   
        }).then(()=> {
          console.log('OK');
        
        })
      }
    
      return (
        <div className="Inputs">
        <div className="all-inputs">
          <div className="client-input">
            <label>Class:</label>
            <input type="text" onChange={(event)=>{
              setClass(event.target.value)
            }}/>
            <label>Level:</label>
            <input type="number" onChange={(event)=>{
              setLevel(event.target.value)
            }}/>
            <label>Circlet:</label>
            <input type="text" required onChange={(event)=> {
              setCirclet(event.target.value)
            }}/>
                        <label>Belt:</label>
            <input type="text" required onChange={(event)=> {
              setBelt(event.target.value)
            }}/>
                        <label>Pendant:</label>
            <input type="text" required onChange={(event)=> {
              setPendant(event.target.value)
            }}/>
                        <label>Cloak:</label>
            <input type="text" required onChange={(event)=> {
              setCloak(event.target.value)
            }}/>
            <button onClick={()=>sendData()}>POST</button>
          </div>
          <div className="client-input2">
            <label>Onyx:</label>
            <input type="text" onChange={(event)=>{
              setOnyx(event.target.value)
            }}/>
            <label>Zircon:</label>
            <input type="number" onChange={(event)=>{
              setZircon(event.target.value)
            }}/>
            <label>Coral:</label>
            <input type="text" required onChange={(event)=> {
              setCoral(event.target.value)
            }}/>
                        <label>Spinel:</label>
            <input type="text" required onChange={(event)=> {
              setSpinel(event.target.value)
            }}/>
                        <label>Opal:</label>
            <input type="text" required onChange={(event)=> {
              setOpal(event.target.value)
            }}/>
                        <label>Amber:</label>
            <input type="text" required onChange={(event)=> {
              setAmber(event.target.value)
            }}/>
            <label>Moonstone:</label>
            <input type="text" required onChange={(event)=> {
              setMoonstone(event.target.value)
            }}/>
            <label>Beryl:</label>
            <input type="text" required onChange={(event)=> {
              setBeryl(event.target.value)
            }}/>
          </div>
          
          <div className="client-input2">
            <label>Aden</label>
            <input type="text" onChange={(event)=>{
            setAden(event.target.value)
            }}/>
            <label>Speed:</label>
            <input type="number" onChange={(event)=>{
              setSpeed(event.target.value)
            }}/>
            <label>Eva:</label>
            <input type="text" required onChange={(event)=> {
              setEva(event.target.value)
            }}/>
                        <label>Authority:</label>
            <input type="text" required onChange={(event)=> {
              setAuthority(event.target.value)
            }}/>
                        <label>Venir:</label>
            <input type="text" required onChange={(event)=> {
              setVenir(event.target.value)
            }}/></div>

            <div className="client-input2">
            <label>Ignis:</label>
            <input type="text" onChange={(event)=>{
              setIgnis(event.target.value)
            }}/>
            <label>Petram:</label>
            <input type="number" onChange={(event)=>{
              setPetram(event.target.value)
            }}/>
            <label>Nebula:</label>
            <input type="text" required onChange={(event)=> {
              setNebula(event.target.value)
            }}/>
                        <label>Procella:</label>
            <input type="text" required onChange={(event)=> {
              setProcella(event.target.value)
            }}/>
                        <label>Joy:</label>
            <input type="text" required onChange={(event)=> {
              setJoy(event.target.value)
            }}/></div>

          </div>
          </div>
      )}
 
export default Menu;