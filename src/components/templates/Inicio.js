import React, { useEffect,useState } from 'react'
import './inicio.css'
import Image from '../../../src/Logo1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Container>
        <Row>
          <Col  className='col-content-money'>
            <Row>
              <Col>
                <p>Bienvenido a <b>Money Converter </b><img className="imgLogo" src={Image} alt="imagenLogo1"></img></p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>En Money Converter podrás visualizar en tiempo real el valor del Dólar, el Euro y Bitcoin, según el sitio web <a href="https://mindicador.cl/">https://mindicador.cl/</a></p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className='col-money' xs lg="3">
            <span style={{"fontWeight": "bold"}}> Dólar Observado</span>
            <span>{valorDolar}</span>
          </Col>
          <Col className='col-money' xs lg="3">
            <span style={{"fontWeight": "bold"}}>Euro Observado</span>
            <span>{valorEuro}</span>
          </Col>
          <Col className='col-money' xs lg="3">
            <span style={{"fontWeight": "bold"}}>Valor Bitcoin</span>
            <span>{valorBitcoin}</span>
          </Col>
        </Row>
      </Container>
      </div>

  )
  }

export default Home