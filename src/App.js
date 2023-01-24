import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/footer';
import Cambia from './components/templates/Cambia';
import Inicio from './components/templates/Inicio';
import Contacto from './components/templates/Contacto';
import Bienvenida from './components/templates/Bienvenida';

function App() {
  return (
  <div className="App img-background">
    <Navbar />
    <Routes>
      <Route path="moneyconverter-react/" element={<Bienvenida />} />
      <Route path="moneyconverter-react/inicio" element={<Inicio />} />
      <Route path="moneyconverter-react/cambia" element={<Cambia />} />
      <Route path="moneyconverter-react/contacto" element={<Contacto />} />
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
