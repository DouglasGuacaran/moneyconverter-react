import React, { useState,useEffect } from 'react'
import { useSelector } from "react-redux";
import './inicio.css'
import Image from '../../../src/Logo1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  const [loading, setLoading] = useState(true);
  const valorDolar = useSelector((state) => state.valorDolar);
  const valorEuro = useSelector((state) => state.valorEuro);
  const valorBitcoin = useSelector((state) => state.valorBitcoin);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="body">
      <Container>
        <Row>
          <Col  className='col-content-money'>
            <Row>
              <Col>
                <p>Bienvenido a <b>Money Converter </b><img className="imgLogo" src={Image} alt="dolar converter"></img></p>
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
            <span style={{"fontWeight": "bold"}}>Dólar Observado</span>
            <span>{ loading ? ('Cargando...'): valorDolar}</span>
          </Col>
          <Col className='col-money' xs lg="3">
            <span style={{"fontWeight": "bold"}}>Euro Observado</span>
            <span>{loading ? ('Cargando...'): valorEuro}</span>
          </Col>
          <Col className='col-money' xs lg="3">
            <span style={{"fontWeight": "bold"}}>Valor Bitcoin</span>
            <span>{loading ? ('Cargando...'): valorBitcoin}</span>
          </Col>
        </Row>
      </Container>
      </div>

  )
  }

export default Home