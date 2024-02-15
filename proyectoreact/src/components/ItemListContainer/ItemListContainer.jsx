import {useState,useEffect} from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [productos,setProductos] = useState([]);

    const {categoryId} = useParams()

    useEffect(()=>{
        
        const fetchData = async () => {

            try {

                const response = await fetch("/productos.json");
                const data = await response.json()

                if(categoryId){
                    const filtroProd = data.filter((p) => p.categoria == categoryId)
                    setProductos(filtroProd)
                }
                else {
                    setProductos(data)
                }
        
            }

            catch(error){
                console.log("Error en el fetch " + error)
            }

        }

        fetchData()

    },[categoryId])


  return (

    <div>

        {productos.length == 0 
        ? 
        <h1>En Mantenimento</h1> 
        : 
        <ItemList productos={productos}/>
        }

    </div>

  )
}

export default ItemListContainer