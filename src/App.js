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
import ThemeProvider from './context/ThemeContext'
import {CartProvider} from './context/CartContext'

function App() {

  return (
    <div className="App">
      <CartProvider>
        <ThemeProvider>
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
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
