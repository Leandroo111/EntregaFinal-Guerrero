import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {


  return (

    <Link to={`/Producto/${producto.id}`}>

      <div key={producto.id} className='texto-productos'>
        <div className='card-productos'>
        <img src={producto.img} alt={producto.descripcion} />
        <p>{producto.nombre}</p>
        <p className='precio'>{"$" + producto.precio}</p>
        </div>
        
        
      </div>

    </Link>

  )
}

export default Item;