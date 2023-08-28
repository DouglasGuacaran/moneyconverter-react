import React, { useState,useEffect } from 'react'
import { useSelector } from "react-redux";
import './inicio.css'
import Image from '../../../src/Logo1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as echarts from 'echarts';;


function Home() {
  const [loading, setLoading] = useState(true);
  const [historicalData, setHistoricalData] = useState({});
  const valorDolar = useSelector((state) => state.valorDolar);
  const valorEuro = useSelector((state) => state.valorEuro);
  const valorBitcoin = useSelector((state) => state.valorBitcoin);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const currencies = ['dolar', 'euro'];
        const data = {};

        for (const currency of currencies) {
          const response = await fetch(`https://mindicador.cl/api/${currency}`);
          const currencyData = await response.json();
          data[currency] = currencyData.serie;
        }

        setHistoricalData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching historical data:', error);
      }
    };

    fetchHistoricalData();
  }, []);
  useEffect(() => {
    if (!loading && Object.keys(historicalData).length > 0) {
      const chartElement = echarts.init(document.getElementById('graph'));
      const dolarData = historicalData.dolar;
      console.log(dolarData)
      const euroData = historicalData.euro;
      const dates = dolarData.map((e) => {
        const date = new Date(e.fecha);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Los meses en JavaScript están basados en 0, por lo que debes sumar 1
        const year = date.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
      }).reverse()
      const dolarValues = dolarData.map((e) => e.valor).reverse();
      const euroValues = euroData.map((e) => e.valor).reverse();

      const option = {
        title: {
          text: 'Dólar y Euro',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Dólar', 'Euro'],
        },
        xAxis: {
          type: 'category',
          data: dates,
          nameLocation: 'middle'
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Dólar',
            type: 'line',
            data: dolarValues,
          },
          {
            name: 'Euro',
            type: 'line',
            data: euroValues
          },
          
        ],
      };

      chartElement.setOption(option);
    }
  }, [loading, historicalData]);


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
        <Row className="row">
          <Col className="col">
            <div id="graph" style={{ borderRadius: '5px' ,backgroundColor:'white', width: '100%', height: '400px' }}></div>
          
          </Col>
        </Row>
      </Container>
      </div>

  )
  }

export default Home