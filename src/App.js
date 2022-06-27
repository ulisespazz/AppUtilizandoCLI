import './App.css';
import ItemCount from './components/ItemCount';
import Card from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Card/>
      <hr/>
      <ItemCount/>
    </div>
  );
}

export default App;
