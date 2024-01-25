import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


function NavBar() {
    return (
        <>
            <div className='navbar'>

            <h1>CompuShop</h1> {/* Haciendo click en el logo se va a poder volver al inicio de la pagina */}

            <ul>
                <li><a>Categorias</a></li>
                <li><a>Notebooks</a></li>
                <li><a>PCs Armadas</a></li>
                <li><a>Ofertas</a></li>
            </ul>
            <CartWidget />

            </div>
        </>
    )
}

export default NavBar