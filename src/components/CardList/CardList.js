import CardItem from '../Card/Card';
import productos from '../../utils/productsMock';
import {Grid} from '@mui/material';
import { useState, useEffect } from 'react';

const CardList = ({title}) => {
    const [products, setProducts] = useState ([])

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
    }

    //Usamos UseEffect para que solo llame una vez cuando se inicia el componente
    useEffect( () => {

        getProducts()
        .then( (response) => {
            console.log("Respuesta Promesa: ", response)
            setProducts(response)
        })
        .catch ( (error) => {
            console.log("Fallo la llamada.", error)
        })
    }, [])

    return(
        <>
        <h2>Los más comprados</h2>
        <Grid container className='general-container'>
            {
                products.map( (producto) => {
                    const {title, price, size, image, id, stock} = producto
                    return(
                        <Grid item md={3} key={id}>
                            <CardItem 
                                title={title} 
                                price={price} 
                                size={size} 
                                image={image} 
                                stock={stock} 
                                id={id} 
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>
    )
}

export default CardList