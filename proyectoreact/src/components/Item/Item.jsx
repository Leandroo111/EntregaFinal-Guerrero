import './item.css'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {


  return (

    <Link to={`/Producto/${producto.id}`}>

      <div key={producto.id} className='cardProductos'>

        <img src={producto.img} alt={producto.descripcion} />
        <p>{producto.nombre}</p>
        <p className='precio'>{"$" + producto.precio}</p>
        
      </div>

    </Link>

  )
}

export default Item;