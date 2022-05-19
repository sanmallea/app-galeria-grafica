//Es necesario instalar esto en la terminal para tener acceso al logo del carrito: npm install @mui/icons-material
//Sino usa un png, pero yo por si las moscas hago lo mismo que hizo el profe
//El ejercicio es solamente agregar al carrito al navbar (usando esto de import y demas, asi que es simple)

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return(
        <div>
            <ShoppingCartIcon fontSize='large' />
        </div>
    )
}

export default CartWidget