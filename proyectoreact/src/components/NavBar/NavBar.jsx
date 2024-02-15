import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <>
            <div className='navbar'>

                <Link to = {'/'}>

                    <h1>CompuShop</h1>

                </Link>

                <ul>

                    <li>
                        <Link to = {'Categoria/gpu'}>Placas de Video</Link>
                    </li>

                    <li>
                        <Link to = {'Categoria/notebooks'}>Notebooks</Link>
                    </li>

                    <li>
                        <Link to = {'Categoria/pc-armada'}>PCs Armadas</Link>
                    </li>

                    <li>
                        <Link to = {'Categoria/procesadores'}>Microprocesadores</Link>
                    </li>

                </ul>

                <CartWidget/>

            </div>
        </>
    )
}

export default NavBar