import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

  const [producto,setProducto] = useState([]);

  const {itemId} = useParams()

    useEffect(()=>{
        
      const fetchData = async () => {

          try {

              const response = await fetch("/productos.json");
              const data = await response.json()
              const product = data.find((p)=>p.id == itemId)
              setProducto(product)

          }
          
          catch(error){

              console.log("Error en el fetch " + error)

          }

      }

      fetchData()

  },[itemId])

  return (

    <div>
      <ItemDetail producto={producto}/>
    </div>
  )

}

export default ItemDetailContainer