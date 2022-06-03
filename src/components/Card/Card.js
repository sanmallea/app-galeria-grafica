import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Card.css';
import ItemCount from './ItemCount.js';
import { Link } from 'react-router-dom';

const CardItem = ({ image, title, price, size, stock, id}) => {
    
    return(
        <Card sx={{ minWidth: 275 }}>
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
                    <ItemCount />
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem