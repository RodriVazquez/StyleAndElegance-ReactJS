import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'


function App() {

  
  return (

    <CartProvider>
      <BrowserRouter>
          <NavBar/>

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/:category' element={<ItemListContainer />} />
            <Route path='/carrito' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            
          </Routes>

      </BrowserRouter>
    </CartProvider>
  )
}

export default App
