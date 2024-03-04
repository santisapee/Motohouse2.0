/* eslint-disable no-unused-vars */
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponnent from './Components/ButtonComponnent.jsx';
import NavBar from './Components/Navbar.jsx';
import './App.css';
import { useState } from "react";
import Item from './Components/Item.jsx';

function App() {

  const [showMenu, setShowMenu] = useState(true);
  
    const toggleMenu = ()=>{
      setShowMenu((isShown) => !isShown);
  } 

  return (
    <>
      <NavBar />

      <h1 className='titulo'>Bienvenido</h1>

      <Item />
      <ButtonComponnent stock={10} isDisabled={showMenu} />
      <button className='boton' onClick={toggleMenu}>Elegir cantidad</button>
      
    </> 
  )
}

export default App
