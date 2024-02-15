import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from './components/Error/Error'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {


  return (
    <>

    <BrowserRouter>

      <NavBar/>

      <Routes>
    
        <Route path='/' element = {<ItemListContainer/>}/>
        <Route path='/Categoria/:categoryId' element = {<ItemListContainer/>}/>
        <Route path='/Producto/:itemId' element = {<ItemDetailContainer/>}/>
        <Route path='*' element = {<Error/>}/>

      </Routes>

    </BrowserRouter>

    </>
  )
}

export default App