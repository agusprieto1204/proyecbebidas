import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemlistConteiner from './componentes/ItemlistConteiner/ItemlistConteiner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemlistConteiner greeting={"Bienvenidos a el Bodegon"} />
     
    </div>
  );
}

export default App;
