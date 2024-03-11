import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ initial, stock, agregarItem }) => {

    const [cantidadItems, setCantidadItems] = useState(1);

    const quitar = () => {
        if (cantidadItems > initial) {
            setCantidadItems(cantidadItems - 1)
        }
    }

    const agregar = () => {
        if (cantidadItems < stock) {
            setCantidadItems(cantidadItems + 1)
        }
    }

    const agregarCarrito = () => {
        agregarItem(cantidadItems)
    }

    return (
        <div className='contador'>

            <p>Cantidad</p>

            <button onClick={quitar}>-</button>

            <p>{cantidadItems}</p>

            <button onClick={agregar}>+</button>

            <div className='btn-agregar'>

                <button onClick={agregarCarrito}>Agregar al carrito</button>

            </div>


        </div>
    )
}

export default ItemCount;