import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'

// OBJETIVO DE HOY: Context funcional. Carrito que se actualice correctamente y tambien funcione el localStorage.
// OBJETIVO DE MIERCOLES: Firebase funcional y terminado. (incluye imágenes)
// OBJETIVO DE JUEVES: DETALLES FINALES (VER .TXT). TERMINAR ESA NOCHE
// OBJETIVO DE VIERNES: HABER TERMINADO LA NOCHE ANTERIOR. 

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
            
          </Routes>

      </BrowserRouter>
    </CartProvider>
  )
}

export default App
