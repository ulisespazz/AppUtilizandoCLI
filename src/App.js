import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <hr/>
    </div>
  );
}

export default App;
