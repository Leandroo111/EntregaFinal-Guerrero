import { useContext } from 'react';
import './CartWidget.css'
import { CartContext } from '../../context/CartContext/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { cantidadCarrito } = useContext(CartContext)

    return (
        <>

            <Link to={'Carrito'}>

                <img src="../../../public/assets/img/carrito.png" alt="Carrito" />

            </Link>

            <p>{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p>

        </>
    )
}

export default CartWidget