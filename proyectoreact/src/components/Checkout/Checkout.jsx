import {useContext, useState} from 'react';
import {db} from '../../firebase/config';
import {collection,addDoc,updateDoc,doc,getDoc} from 'firebase/firestore';
import { CartContext } from '../../context/CartContext/CartContext';
import './Checkout.css'

const Checkout = () => {

    
    const {cart,totalCarrito,vaciarCarrito} = useContext(CartContext)

    
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [emailConfirmacion,setEmailConfirmacion] = useState("")
    const [error,setError] = useState("")
    const [ordenId,setOrdenId] = useState("")

    
    const manejadorFormulario = (event) => {

        
        event.preventDefault()

        
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Completar todos los campos")
            return;
        }

        if(email !== emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return;
        }
        
        const orden = {
            items: cart.map((producto) => ({
                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.cantidad
            })),
            total: totalCarrito(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }
        
        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db,"productos",productoOrden.id);
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )

        .then(() => {
            addDoc(collection(db,"pedidos"),orden)
            .then((docRef) => {
                setError("")
                setOrdenId(docRef.id)
                vaciarCarrito()
            })

            .catch((error) => {
                console.log(error)
                setError("Se produjo un error al crear la orden")
            })
        })

        .catch((error) => {
            console.log(error)
            setError("No se puede actualizar el stock")
        })
    }

    return (

        <div className='formulario'>

            <h1>Ingresa tus datos</h1>

            <form onSubmit={manejadorFormulario}>

                {cart.map((producto) => (

                    <div key={producto.producto.id}>

                        <h2>
                            {producto.producto.nombre} x {producto.cantidad}
                        </h2>

                    </div>
                    
                ))}
         
                <div className='formulario-label'>

                    <div>
                        <label htmlFor="Nombre"> <p>Nombre</p></label>
                        <input name="Nombre" type='text' pattern='[A-Za-z]' onChange={(e) => setNombre(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="Apellido"><p>Apellido</p></label>
                        <input name="Apellido" type='text' onChange={(e) => setApellido(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="Nombre"><p>Teléfono</p></label>
                        <input name="Teléfono" type='number' min={0} onChange={(e) => setTelefono(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="Email"><p>Email</p></label>
                        <input name="Email" type='email' onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="EmailConfirmacion"><p>Email Confirmacion</p></label>
                        <input name="EmailConfirmacion" type='email' onChange={(e) => setEmailConfirmacion(e.target.value)}/>
                    </div>

                    <button type='submit'>Completar compra</button>

                    {error && <p style={{color: "red"}}>{error}</p>}

                    {ordenId && (
                        <p>
                            ¡Gracias por tu compra! Tu número de orden es: {ordenId}
                        </p>
                    )}

                </div>
                
            </form>

        </div>
    );
};

export default Checkout;