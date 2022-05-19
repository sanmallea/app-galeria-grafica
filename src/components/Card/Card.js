import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Card.css';

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
                    <Button variant={'contained'}>Comprar</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem