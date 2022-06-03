import './App.css';
import NavBar from './components/NavBar/NavBar';
import { useEffect } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Detalle from './pages/Detalle';
import Fondos from './pages/Fondos';
import Gigantografias from './pages/Gigantografias';
import Stickers from './pages/Stickers';

function App() {

  //Consumiendo APIS - FETCH
  /*
  useEffect( () =>{
    fetch('', {
      method: 'PATCH',
      headers : {
        'Access-Control-Allow-Origin': '*',
        token,
        'Content-Type': 'application/json',
        'Autorization': token
      },
      body: JSON.stringify({
        name: "",
        mail: '',
      })
    })
    .then((response) =>{
      return response.json()
    })
    .then((res) =>{
      console.log("respuesta : ", res)
    })
  }, [])
  */

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contacto />} />
          <Route path='/fondos' element={<Fondos />} />
          <Route path='/gigantografias' element={<Gigantografias />} />
          <Route path='/stickers' element={<Stickers />} />
          <Route path='*' element={<h1> 404 - PAGE NOT FOUND </h1>} />
          <Route path='/product/:id' element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
