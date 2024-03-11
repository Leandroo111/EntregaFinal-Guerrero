import './CartItem.css'

const CartItem = ({ producto, eliminarProducto }) => {

    return (
        <div className='lista-carrito lista-productos'>

            <div className='card'>

                <h2>{producto.producto.nombre}</h2>
                <img src={producto.producto.img} alt={producto.producto.nombre} />
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio unitario: ${producto.producto.precio}</p>
                <p>Valor total: ${producto.producto.precio * producto.cantidad}</p>
                <button onClick={() => eliminarProducto(producto.producto.id)}>Eliminar producto</button>
                
            </div>

        </div>
    );
};

export default CartItem;