import React,{ useEffect,useState } from 'react'
import Image from '../../../src/coin.svg'
import CurrencyInput from '../../layouts/CurrencyInput';
import './Cambia.css'

    function Cambia() {
        const [valorDolar, setValorDolar] = useState(1);
        const day = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };    
        const fechaHoy = day.toLocaleDateString('es-CH', options);
        const [amount1, setAmount1] = useState(1);
        const [amount2, setAmount2] = useState(valorDolar);

        useEffect(() => {
            fetch("https://mindicador.cl/api/")
            .then(response => response.json())
            .then((result) => {
                setValorDolar(result.dolar.valor)
                console.log(typeof(result.dolar.valor))})
            .catch(error => console.log('error', error));
        })

        useEffect(() => {
            if (!!valorDolar){
                handleAmountChange(amount1,1)
            }
        });

        function handleAmountChange(amount1) {
            setAmount2((amount1*valorDolar))
            setAmount1(amount1)
        }

        function handleAmountChange2(amount2) {
            setAmount2(amount2)
            setAmount1(amount2/valorDolar)
            
        }

        return (
            <div className="m-3">
                <div className="row">
                    <div className="col">
                        <img  className="img" src={Image} alt="imagen"></img>
                        <h1>Valor Dólar hoy: 1 USD {valorDolar} pesos Chilenos</h1>
                        <span>Valor del dólar del día de hoy: {fechaHoy}</span>
                        <CurrencyInput
                        name="input1"
                        onAmountChange={handleAmountChange}
                        amount={amount1}
                        />
                        <CurrencyInput
                        name="input2"
                        onAmountChange={handleAmountChange2}
                        amount={amount2}
                        />
                        <span> Información obtenida a través de la siguiente API: https://mindicador.cl/api </span>
                    </div>
                </div>
            </div>
        )   
    }


export default Cambia