import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import './Card.css';
import ItemCount from './ItemCount.js';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import CartContext from '../../context/CartContext'

const CardItem = ({image, title, price, size, stock, id}) => {

    const { darkTheme } = useContext(ThemeContext)

     //Agregar al Cart
     const { addProductToCart } = useContext(CartContext)

    return(
        <Card sx={{ minWidth: 275 }} className={` ${darkTheme ? 'dark-mode' : ''}`}>
            <CardContent>
                <div className="card-item">
                    <div className='card-item__img-box'>
                        <img src={`./productos/${image}`} />
                        <button>
                        <Link to={`/product/${id}`}>Ver en Detalle</Link>
                        </button>
                    </div>
                    <p>{title}</p>
                    <p>{size}</p>
                    <span>${price}</span>
                    <Button
                        variant={'contained'}
                        className=''
                        onClick={() => addProductToCart({image, title, price, size, stock, id})}>
                        Agregar al Carrito
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default CardItem