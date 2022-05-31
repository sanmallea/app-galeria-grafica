import ItemDetail from "../ItemDetail/ItemDetail"
import {producto, producto2} from '../../utils/productsMock'
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState ({})

    const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(producto)
            }, 2000)
        })
    }

    useEffect(() => {
        getItem()
        .then( (res) =>{
            setProduct(res)
        })
    }, [])

    return(
        <>
        <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer