import React from 'react'
import { Routes,Route} from 'react-router-dom'
import CartItem from '../Pages/CartItem'
import EditProd from '../Pages/EditProd'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import SingleProdPage from '../Pages/SingleProdPage'
import RequiredAuth from './RequiredAuth'

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Products/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/prod/:id" element={<SingleProdPage/>} />
      <Route path='/prod/:id/edit' element={<RequiredAuth><EditProd/></RequiredAuth>} />
      <Route path="/cart" element={<CartItem/>} />

    </Routes>
  )
}

export default MainRoute