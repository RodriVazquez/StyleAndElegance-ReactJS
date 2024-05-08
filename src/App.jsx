import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (

      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:category' element={<ItemListContainer />} />
        </Routes>

        

      </BrowserRouter>

  )
}

export default App
