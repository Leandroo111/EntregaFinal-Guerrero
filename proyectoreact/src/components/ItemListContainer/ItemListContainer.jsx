import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams()

  useEffect(() => {

    const listaProductos =
      categoryId ?
        query(collection(db, "productos"), where("categoria", "==", categoryId))
        :
        collection(db, "productos")

    getDocs(listaProductos)
      .then((res) => {

        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data()
          return { id: doc.id, ...data }

        })

        setProductos(nuevosProductos)

      })

      .catch((error) => console.log(error))

  }, [categoryId])


  return (

    <div>

      {productos.length == 0 ? (<h1>Loading...</h1>) : (<ItemList productos={productos} />)}

    </div>

  )

}

export default ItemListContainer