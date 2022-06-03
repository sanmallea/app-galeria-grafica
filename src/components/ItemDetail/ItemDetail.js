import './ItemDetail.css';
import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import ItemCount from '../Card/ItemCount';

const ItemDetail = ({data}) => {

    const [size, setSize] = useState('');

    const handleChange = (event) => {
        setSize(event.target.value);
    };


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

                <div className='detail-product-counter'>
                    <ItemCount />
                </div>

            </div>
        </div>
    )
}

export default ItemDetail