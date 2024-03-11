import {useState,useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from './components/Error/Error'
import ThemeProvider from './context/ThemeContext/ThemeContext';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext/CartContext';
import Checkout from './components/Checkout/Checkout';
import DarkComponent from './components/DarkComponent/DarkComponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {


  return (
    <>

    <BrowserRouter>

      <CartProvider>

        <NavBar/>

        <Routes>
    
          <Route path='/' element = {<ItemListContainer/>}/>
          <Route path='/Categoria/:categoryId' element = {<ItemListContainer/>}/>
          <Route path='/Producto/:id' element = {<ItemDetailContainer/>}/>
          <Route path='/Carrito' element={<Cart/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='*' element = {<Error/>}/>

        </Routes>

      </CartProvider>

    </BrowserRouter>

    </>
  )
}

export default App