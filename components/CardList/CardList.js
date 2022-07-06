import CardItem from '../Card/Card';
import productos from '../../utils/productsMock';
import {Grid} from '@mui/material';
import { useState, useEffect } from 'react';
import {collection, getDocs, query, where} from 'firebase/firestore'
import db from '../../utils/firebaseConfig'

const CardList = ({title}) => {
    const [products, setProducts] = useState ([])

    useEffect( () => {
        setProducts([])
        getProducts()
        .then( (productos) => {
            setProducts(productos)
        })
    }, [])

    const getProducts = async() => {
        
        const productSnapshot = await getDocs(collection(db, "productos"));
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
            resolve(productList)
        }, 2000);
       


    })
    }

    //Usamos UseEffect para que solo llame una vez cuando se inicia el componente
    useEffect( () => {

        getProducts()
        .then( (response) => {
            console.log("Respuesta Promesa: ", response)
            setProducts(response)
        })
        .then ( (productos) => {
            console.log("productos: ", productos)
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