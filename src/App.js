//Aca pareciera como que no hubieron muchos cambios, pasa que mas que nada tiene que ver con lo que estamos importando
//Es clave lo de CardList.js mas que nada (que eso tiene todo que ver con Card.js), esta todo relacionado jajaja
//Despues lo del carrito de compras esta en NavBar

import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardItem from './components/Card/Card';
import {Container} from '@mui/material'
import CardList from './components/CardList/CardList';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <CardList />
      </Container>
    </div>
  );
}

export default App;
