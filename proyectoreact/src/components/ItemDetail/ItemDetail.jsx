import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {

    const [cart, setCart] = useState(false)

    const { agregarCarrito } = useContext(CartContext)

    const agregarItem = (count) => {

        setCart(true)

        agregarCarrito(producto, count)

    }

    return (

        <div className='detalle-productos'>
            
            <img src={producto.img} alt={producto.descripcion} />

            <div>

                <h2>{producto.descripcion} </h2>
                <h3 className='texto'>Precio Pagando en Efectivo/Transferencia</h3>
                <h3>{"$" + producto.precio}</h3>
                <h3 className='texto'>Precio Pagando en Tarjeta</h3>
                <h3 className='precio-tarjeta'>{"$" + producto.precio * 1.30}</h3>
                <h4>{"Stock disponible: " + producto.stock}</h4>

                {producto.stock == 0 ? <h2>No tenemos stock de este producto</h2> : (
                    cart ? <Link to={'/Carrito'}> <h5>Ir al carrito</h5> </Link> : <ItemCount initial={1} stock={producto.stock} agregarItem={agregarItem} />
                )}

            </div>
    
        </div>

    );

};

export default ItemDetail;