import CardList from "../components/CardList/CardList"
import './Home.css';

const Home = () => {
    return(
    <>
        <div className="container">
            <img src="/fotohome.jpg"></img>
            <h2>Bienvenido a Galeria Gráfica</h2>
            
        </div>



    <CardList />
      
    </>
    )
}

export default Home