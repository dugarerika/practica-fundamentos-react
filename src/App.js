// importamos la libreria de axios
import axios from 'axios';

// creamos un cliente que vamos a utilizar para hacer las peticiones a nuestro end points
const cliente = axios.create({
  baseUrl: process.env.REACT_APP_API_BASE_URL,
});

function App() {
  return <div className="App">Practica Fundamentos React</div>
}

export default App;
