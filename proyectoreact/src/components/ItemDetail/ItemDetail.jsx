import './ItemDetail.css'

const ItemDetail = ({producto}) => {

    return (

        <div className='productos'>

            <img src={producto.img} alt={producto.descripcion}/>

            <div>
            
                <h2>{producto.descripcion} </h2>
                <h3 className='texto'>Precio Pagando en Efectivo/Transferencia</h3>
                <h3>{"$" + producto.precio}</h3>
                <h3 className='texto'>Precio Pagando en Tarjeta</h3>
                <h3 className='precio-tarjeta'>{"$" + producto.precio*1.30}</h3>
                <h4>{"Stock disponible: " + producto.stock}</h4>
            
            </div>
        </div>
    );

};

export default ItemDetail;