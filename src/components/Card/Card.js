import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Card.css';
import Modal from '../Modal/Modal';
import ItemCount from './ItemCount.js';

//Todo lo que hay que hacer esta en el nuevo archivo ItemCount.js
//Lo importante acá es justamente importarlo, está en la linea 25 acá, abajo de price
//Tambien obvio llamarlo arriba en el import
//Eso de Modal es algo que creo hicieron en la clase de apoyo, en la última clase hablaron muy poco de eso y la verdad
//no lo agrego xq no creo agregue nada. Yo lo copie y está todo tal cual en el archivo Modal.js, pero no es importante


const CardItem = ({ image, title, price, size }) => {

    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./productos/${image}`} />
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