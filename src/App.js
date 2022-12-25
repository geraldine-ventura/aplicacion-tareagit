import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.jpg" ;
import ListaDeTareas from './componentes/ListaDeTareas.js';
import Tarea from './componentes/Tarea';
function App() {
  return (
    <div className="Aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img 
         src={freeCodeCampLogo}
         className="freecodecamp-logo" 
         alt='logo de freecodecamp'
         />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
