import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Container} from '@mui/material'
import CardList from './components/CardList/CardList';
import { useEffect } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


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
      <NavBar />
      {/*<Container>
        <CardList />
      </Container>*/}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
