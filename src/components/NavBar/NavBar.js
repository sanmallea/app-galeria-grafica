import React from 'react'
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';

//import {navBarOptions} from '../../helpers/strings'; 
//Esto de aca es la correccion que me hizo a mi, no le des bola

//Aca no hubieron muchos cambios, solamente lo del carrito que tiene su archivo aparte, aunque si lo nombro aca abaho: CartWidget (aparte de
// ponerlo arriba en el import)

const NavBar = () => {
    return (
        <AppBar position="static" className="navstyle">
            <Toolbar className='toolbarcolor'>
                <div className='navbar-logo'>
                    <img src='./logo galeria grafica blanco.png'></img>
                </div>
                <ul>
                    <li>
                        <button>Home</button>
                    </li>
                    <li>
                        <button>Fondos</button>
                    </li>
                    <li>
                        <button>Gigantografias</button>
                    </li>
                    <li>
                        <button>Stickers</button>
                    </li>
                    <li>
                        <button>Contacto</button>
                    </li>
                </ul>
                <CartWidget />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar