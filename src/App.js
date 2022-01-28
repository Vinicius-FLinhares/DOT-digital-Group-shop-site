import './App.css';
import Menu from './Componentes/Menu';
import Cart from './Pages/Cart';
import Favoritos from './Pages/Favoritos';
import Finalizado from './Pages/Finalizado';
import Checkout from './Pages/Checkout';
import Home from './Pages/Home';
import {Routes,Route} from 'react-router-dom'


function App() {
  return(
  <>
  <Menu/>
  <Routes>
      <Route path="/" element={<Home/>} />  
      <Route path="/Home" element={<Home/>} />  
      <Route path="/Favoritos" element={<Favoritos/>} />  
      <Route path="/Carrinho" element={<Cart/>} />
      <Route path="/Checkout" element={<Checkout/>} />
      <Route path="/Finalizado" element={<Finalizado/>} />
  </Routes>
  </>
)}

export default App;
