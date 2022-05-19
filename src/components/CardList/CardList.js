//Esto es tal cual lo que se muestra en la app. Agarra la informacion de Card.js y la mete en las boxes del producto

import CardItem from '../Card/Card';
import {Grid} from '@mui/material'

const CardList = () => {
    return(
        <>
        <h2>Los más comprados</h2>
        <Grid container className='general-container'>
            <Grid item md={3}>
                <CardItem title={"Fondo Madera Oscura"} price={1000} size={"30cm x 30cm"} image={"madera01.jpg"} />
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Fondo Madera Clara"} price={1200} size={"45cm x 45cm"} image={"madera02.jpg"} />
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Fondo Marmol Blanco"} price={1500} size={"60cm x 60cm"} image={"marmolblanco.jpg"} />
            </Grid>
        </Grid>
        </>
    )
}

export default CardList