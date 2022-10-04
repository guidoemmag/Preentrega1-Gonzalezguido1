import React from 'react'
import './Header.css'
import logo from '../../Assets/logo.png'
import Carrito from '../Header/CartWidget'

const Navbar = () =>{
    return(
        <header>
            <img src={logo} alt="" />
            <h1> Disbyte</h1>
            <nav>
                <a href=""> Femmto</a>
                <a href=""> Femmto HC</a>
                <a href=""> Omrom</a>
                <a href=""> Matmax</a>
            </nav>
            <Carrito/>
        </header>
        
        
        
    )
}

export default Navbar
