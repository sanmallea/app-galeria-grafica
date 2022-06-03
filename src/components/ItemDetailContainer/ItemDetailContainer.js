import ItemDetail from "../ItemDetail/ItemDetail"
import productos from '../../utils/productsMock'
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const ItemDetailContainer = () => {
    
    const {id} = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = useState ({})

    /*const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve({producto})
            }, 2000)
        })
    }*/

    useEffect(() => {
        /*getItem()
        .then( (res) =>{
            setProduct(res)
        })
        .catch ( (error) => {
            console.log("Fallo la llamada.", error)
        })*/
        if(productFilter === undefined){
            navigate(<h1>404 - Page not found</h1>)
        }else {
            setProduct(productFilter)
        }
    }, [id])

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