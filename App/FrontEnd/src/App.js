import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './app/frontEnd/Pages/login';
import Home from './app/frontEnd/Pages/home';
import Produto from './app/frontEnd/Pages/produto';
import ZoomProd from './app/frontEnd/Pages/zoom';
import Config from './app/frontEnd/Pages/config';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/home" element={ <Home /> } />
        <Route exact path="/produto" element={ <Produto /> } />
        <Route exact path="/produto/:id" element={ <ZoomProd /> } />
        <Route exact path="/produto/config" element={ <Config /> } />
      </Routes>
    </div>
  );
}

export default App;
