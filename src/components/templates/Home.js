import React, { useEffect,useState } from 'react'
import './Home.css'

function Home() {
  const [valorDolar, setValorDolar] = useState(1);
  const [valorEuro, setValorEuro] = useState(1);
  const [valorBitcoin, setValorBitcoin] = useState(1);

  useEffect(() => {
    fetch("https://mindicador.cl/api")
    .then(response => response.json())
    .then((data) => {
      setValorDolar(data.dolar.valor)
      setValorEuro(data.euro.valor)
      setValorBitcoin(data.bitcoin.valor)
      console.log(data)
    })
    .catch(error => {console.log('error',error)})
  
  })





  return (
    <div className="container">
      <div className="row">
        <div className="col-12 grid">
          <div className="row">
            <p>Bienvenido a Money Converter</p>
          </div>
          <div className="row">
            <p>En Money Converter podrás visualizar en tiempo real el valor del Dólar, el Euro y Bitcoin, según el sitio web <a href="https://mindicador.cl/api">https://mindicador.cl/api</a></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3 Dolar esp">
          <p>{valorDolar}</p>
          <span> Dólar Observado</span>
        </div>
        <div className="col-3 Euro esp">
          <p>{valorEuro}</p>
          <span>Valor Euro</span>
        </div>
        <div className="col-3 Bitcoin esp">
          <p>{valorBitcoin}</p>
          <span>Valor Bitcoin</span>
        </div>
      </div>
    </div>
  )
  }

export default Home