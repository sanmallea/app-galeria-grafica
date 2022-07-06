import React from 'react'
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import ThemeSwitch from './ThemeSwitch';

//import {navBarOptions} from '../../helpers/strings'; 

const NavBar = () => {

    const { darkTheme } = useContext(ThemeContext)

    return (
        <AppBar position="static" className={`navstyle ${darkTheme ? 'dark-mode' : ''}`}>
            <Toolbar className='toolbarcolor'>
                <div className='navbar-logo'>
                    <img src='./logo galeria grafica blanco.png' Link to={'/'}></img>
                </div>
                <ul>
                    <li>
                        <button>
                            <Link to='/' id='button-link'>Home</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to='/fondos' id='button-link'>Fondos</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to='/gigantografias' id='button-link'>Gigantografias</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to='/stickers' id='button-link'>Stickers</Link>
                        </button>
                    </li>
                    <li>
                            <button>
                                <Link to="/contact" id='button-link'>Contacto</Link>
                            </button>
                    </li>
                </ul>
                <ThemeSwitch />
                <CartWidget />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar