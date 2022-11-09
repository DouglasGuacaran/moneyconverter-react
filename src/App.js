import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/footer';
import Cambia from './components/templates/Cambia';
import Home from './components/templates/Home';
import Contacto from './components/templates/Contacto';
import Bienvenida from './components/templates/Bienvenida';

function App() {
  return (
  <div className="App img-background">
    <Navbar />
    <Routes>
      <Route path="/" element={<Bienvenida />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cambia" element={<Cambia />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
