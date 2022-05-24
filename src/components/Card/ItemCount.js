import * as React from 'react';
import { Button } from '@mui/material';
import './Card.css';
import {useState} from 'react'

//Lo primero que hay que hacer aca es agregar el div que tiene el count-item. Ese es el boton para agregar y sumar objetos

//Fijate tambien que agregamos estilos de count-item en el css

//Despues agrega el import useState, y agrega abajo el const que tiene setCount

//Agrega el addCount y restCount en los botones y crea los const de cada uno. Esto es para
//sumar y restar los numeros en la pagina

//Agrega lo de Stock para justamente agregar el stock (jeje) El numero que esta en el useState seria el stock

//Para terminar el ejercicio que piden, en el boton de comprar agrega un onClick y el console log para que 
//aparezca cuantos comparias al hacer click en el boton


const ItemCount = () => {
    //Sumar o restar productos
    const [count, setCount] = useState (1)

    const addCount = () => {
        setCount(count + 1)
    }
    const restCount = () => {
        setCount(count - 1)
    }
    //Stock
    const[stock, setStock] = useState(10)

    return(
        <div className='count-item'>
            <Button onClick={restCount} disabled={count == 1}>-</Button>
            <p>{count}</p>
            <Button onClick={addCount} disabled={count == stock}>+</Button>
            <Button onClick={console.log(count)} variant={'contained'}>Comprar</Button>
        </div>
    )
}

export default ItemCount