import './App.css';
import NavBar from "./components/NavBar/navbar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import "./components/reset.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./components/Landing/landing.js"

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="¡Bienvenido/a a nuestra web de venta de ropa!" />
      <Landing/>
    </div>
    );
}

export default App;

