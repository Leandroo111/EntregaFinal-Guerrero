import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartContext';
import CartItem from '../CartItem/CartItem';
import '../CartItem/CartItem.css'

const Cart = () => {

    const { cart, vaciarCarrito, eliminarProducto, totalCarrito } = useContext(CartContext)

    return (
        <div className='lista-carrito'>

            {cart.length == 0
                ?
                <>
                    <h1>NO HAY PRODUCTOS EN EL CARRITO</h1>
                    <Link to={"/"}>IR AL INICIO</Link>
                </>

                :

                <>

                    <h1>Carrito</h1>

                    {cart.map((p) => (
                        <CartItem key={p.producto.id} producto={p} eliminarProducto={eliminarProducto} />
                    ))}


                    <p>Total: ${totalCarrito()}</p>
                    <div className='btnCompra'>
                        <button onClick={vaciarCarrito}>Vaciar carrito</button>

                        <Link to={"/checkout"}>
                            <button> Finalizar compra </button>
                        </Link>
                    </div>

                </>



            }
        </div>
    );
};

export default Cart;