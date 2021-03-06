import ItemDetail from "../ItemDetail/ItemDetail"
import productos from '../../utils/productsMock'
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {doc, getDoc} from 'firebase/firestore'
import db from "../../utils/firebaseConfig"

const ItemDetailContainer = () => {
    
    const {id} = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = useState ({})

    /*const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve({product})
            }, 2000)
        })
    }*/

    useEffect(() => {
        
        getProduct()
        .then( (prod) => {
            console.log("Respuesta getProduct: ", prod)
            setProduct(prod)
        })
        
        /*
        .catch ( (error) => {
            console.log("Fallo la llamada.", error)
        })
        if(productFilter === undefined){
            navigate(<h1>404 - Page not found</h1>)
        }else {
            setProduct(productFilter)
        }*/
    }, [id])

    const getProduct = async() => {
        const docRef = doc(db, "productos", id)
        const docSnaptshop = await getDoc(docRef)
        let product = docSnaptshop.data()
        product.id = docSnaptshop.id
        return product
    }

    const productFilter = productos.find ( (product) => {
        return product.id == id
    })

    return(
        <>
            <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer