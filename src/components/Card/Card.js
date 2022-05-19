//Parece mucho pero te aseguro que no. Esto es el contenido que esta dentro de cada cuadro con el producto

//Con respecto a las imagenes, vas a tener que traer algunas. El profe igual aviso que para este ejercicio no es importante tener como la lista
//de productos y eso, que podes dejar abajo un texto explicando que vas a usar y listo. Pero ya lo tenes aca hecho, yo te recomiendo que agarres
// 3 stickers locos y los pongas, asi queda mas lindo aparte

import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Card.css';


//lo que esta entre parentesis aca abajo es despues la informacion que se pasa al archivo CardList. Yo le agregue lo del tamaño,
//pero el profe nomas puso image, title y price
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