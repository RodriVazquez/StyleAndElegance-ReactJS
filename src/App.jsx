import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <div>
        <NavBar/>
      </div>
      <div>
        <ItemListContainer greeting="Hola a todos!"/>
      </div>
    </>
  )
}

export default App
