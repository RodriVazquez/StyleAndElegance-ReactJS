import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemList from './components/ItemDetails/ItemList'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (

      <BrowserRouter>

        <NavBar/>

        <ItemListContainer/>

      </BrowserRouter>

  )
}

export default App
