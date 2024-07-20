import {NavBar} from "./components/NavBar"
import {Header} from "./components/Header"
import { ItemListContainer } from "./components/ItemListContainer"


function App() {
  return (
    <>
      <Header/>
      <NavBar/>
      <ItemListContainer greeting = "Bienvenido" />
    </>
    
  )
}

export default App
