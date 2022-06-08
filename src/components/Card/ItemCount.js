import * as React from 'react';
import { Button } from '@mui/material';
import './Card.css';
import {useState} from 'react'

const ItemCount = ({actualizarCantidad, setShowButton}) => {
    //Sumar o restar productos
    const [count, setCount] = useState (1)

    const addCount = () => {
        setCount(count + 1)
        actualizarCantidad(count +1)
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
            <Button variant={'contained'} onClick={() => setShowButton(true)}>Agregar</Button>
        </div>
    )
}

export default ItemCount