import CardItem from '../Card/Card';
import {Grid} from '@mui/material'
import { useState, useEffect } from 'react';

const CardList = ({title}) => {
    const [products, setProducts] = useState ([])
    const productos = [
        {
            title : 'Fondo Madera Oscura',
            price : 1000,
            size : '30cm x 30cm',
            image : 'madera01.jpg',
            description: '',
            stock: 15,
            id: 1,
        },
        {
            title : 'Fondo Madera Clara',
            price : 1200,
            size : '45cm x 45cm',
            image : 'madera02.jpg',
            description: '',
            stock: 15,
            id: 2,
        },
        {
            title : 'Fondo Marmol Blanco',
            price : 1500,
            size : '60cm x 60cm',
            image : 'marmolblanco.jpg',
            description: '',
            stock: 15,
            id: 3,
        },
    ]




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
            //console.log("Respuesta Promesa: ", response)
            setProducts(response)
        })
        .catch ( (error) => {
            //console.log("Fallo la llamada.", error)
        })
        .finally ( () => {
            //console.log("Termino la promesa.")
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
                            <CardItem title={title} price={price} size={size} image={image} stock={stock} />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>
    )
}

export default CardList