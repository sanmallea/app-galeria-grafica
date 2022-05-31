import * as React from 'react';
import { Button } from '@mui/material';
import './Card.css';
import {useState} from 'react'

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
            <Button onClick={console.log(count)} variant={'contained'} className='buy-button'>Comprar</Button>
        </div>
    )
}

export default ItemCount