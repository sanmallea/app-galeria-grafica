import React from 'react'
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

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
            </Toolbar>
        </AppBar>
    )
}

export default NavBar