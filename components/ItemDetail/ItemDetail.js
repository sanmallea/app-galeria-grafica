import './ItemDetail.css';
import { MenuItem, Select, Button } from '@mui/material';
import { useState } from 'react';
import ItemCount from '../Card/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({data}) => {

    const [size, setSize] = useState('');

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    const [showButton, setShowButton] = useState(false)

    //Definir cantidad
    const [cantidad, setCantidad] = useState(1)


    return(
        <div className='detail-product-container'>
            <div className='detail-product-image'>
                <img src={`./productos/${data.image}`} />
            </div>
            
            <div className='detail-product-info'>

                <div>
                    <h2>{data.title}</h2>
                </div>

                <p>${data.price}</p>
                

                <label>Selecciona tu medida</label>

                <Select
                    className='select-custom'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    placeholder="Selecciona tu medida"
                    onChange={(e) => handleChange(e)}
                    >
                    <MenuItem value={'30cm x 30cm'}>30cm x 30cm</MenuItem>
                    <MenuItem value={'40cm x 40cm'}>40cm x 40cm</MenuItem>
                </Select>

                {!showButton ?
                <div className='detail-product-counter'>
                    <ItemCount 
                        actualizarCantidad={setCantidad}
                        cantidad={cantidad}
                        setShowButton={setShowButton}/>
                </div>
                :
                <Button className='final-buy' variant={'contained'}><Link to= '/cart'>Finalizar mi Compra</Link></Button>}

            </div>
        </div>
    )
}

export default ItemDetail