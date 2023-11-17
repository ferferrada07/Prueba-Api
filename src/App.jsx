
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MiApi from './components/MiApi';




function App() {

  return(
    <div>
      <div>
        <div><Navbar></Navbar></div>
      </div>
      <div>
        <div><MiApi/></div>
      </div>
      <div>
        <div><Footer
				  classN={"bg-dark text-white text-center p-3"}
				  text={"Noviembre 2023. Todos los derechos reservados."}
			  ></Footer>
        </div>
      </div>
    </div>

  )

}

export default App
