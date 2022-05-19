import './App.css';
import NavBar from './components/NavBar/NavBar';
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
