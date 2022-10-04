import React from "react";
import './App.css'
import Navbar from './Components/Header/Navbar'
import ItemListContainer from './Components/Header/ItemListContainer'
function App(){
  const mensaje = "Hola a todos"
  return (
    <>
    <Navbar/>
    <ItemListContainer gretting={mensaje}/>
    
    </>
  )
}

export default App

