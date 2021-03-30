import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import database from "./rickandmorty.json"

function App() {
  return (
    <body>
    <div>
    <Header/>
    <div class="contenedor">
    <div class="contenedor-cards">  
    {
       database.map(function(dato, idx) {
        return < Card datos={dato} key={idx}/>
      })
                }
    </div>
    </div>

    <Footer/>
     </div>
     </body>
  )};

export default App;

// en App.js armo toda la estructura principal para que despues index.js lo envie hacia el elemento con id 'root' que vive en public/index.html

