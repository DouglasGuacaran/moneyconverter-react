import React, { useEffect,useState } from 'react'
import './home.css'
import Image from '../../../src/Logo1.png'

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
    })
    .catch(error => {console.log('error',error)})
  
  })


  return (
    <div className="body">
      <div className="container">
        <div className="row">
          <div className="col-12 grid">
            <div className="row ">
              <div className="col money">
                <p>Bienvenido a <b>Money Converter </b><img className="imgLogo" src={Image} alt="imagenLogo1"></img></p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>En Money Converter podrás visualizar en tiempo real el valor del Dólar, el Euro y Bitcoin, según el sitio web <a href="https://mindicador.cl/">https://mindicador.cl/</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3 Dolar esp">
            <span style={{"fontWeight": "bold"}}> Valor Dólar Observado</span>
            <span>{valorDolar}</span>
          </div>
          <div className="col-3 Euro esp">
            <span style={{"fontWeight": "bold"}}>Valor Euro</span>
            <span>{valorEuro}</span>
          </div>
          <div className="col-3 Bitcoin esp">
            <span style={{"fontWeight": "bold"}}>Valor Bitcoin</span>
            <span>{valorBitcoin}</span>
          </div>
        </div>
      </div>
    </div>
  )
  }

export default Home