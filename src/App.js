import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from './components/NavBar';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { CartContextProvider } from './components/CartContext';
import CartView from './components/CartView';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} /> 
            <Route path="/tipoProducto/:idcategoria" element={<ItemListContainer/>} /> 
            <Route path="/id/:iditem" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<CartView/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
