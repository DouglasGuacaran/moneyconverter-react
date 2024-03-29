import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/footer';
import Cambia from './components/templates/Cambia';
import Inicio from './components/templates/Inicio';
import Contacto from './components/templates/Contacto';
import Bienvenida from './components/templates/Bienvenida';
import { Provider } from "react-redux";
import store from "./store";
import { setValorDolar, setValorEuro,setValorBitcoin } from "./actions";
import React, { useEffect } from 'react';
function App() {
  
  useEffect(() => {
  fetch("https://mindicador.cl/api")
    .then(response => response.json())
    .then(data => {
      store.dispatch(setValorDolar(data.dolar.valor));
      store.dispatch(setValorEuro(data.euro.valor));
      store.dispatch(setValorBitcoin(data.bitcoin.valor));
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    },[]);

  return (
  <div className="App img-background">
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="moneyconverter-react/" element={<Bienvenida />} />
        <Route path="moneyconverter-react/inicio" element={<Inicio />} />
        <Route path="moneyconverter-react/cambia" element={<Cambia />} />
        <Route path="moneyconverter-react/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Provider>
  </div>
  );
}

export default App;
