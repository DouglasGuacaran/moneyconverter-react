import React, { useEffect, useState } from "react"
import Image from "../../../src/coin.svg"
import CurrencyInput from "../../layouts/CurrencyInput"
import "./cambia.css"

function Cambia() {
    const [valorDolar, setValorDolar] = useState()
    const [valorEuro, setValorEuro] = useState()
    const [amount1, setAmount1] = useState("0")
    const [amount2, setAmount2] = useState("0")
    const [currency1, setCurrency1] = useState("USD")
    const [currency2, setCurrency2] = useState("CLP")
    
    const rates = { CLP: 1, USD: valorDolar, Euro: valorEuro }
    const day = new Date()
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    const fechaHoy = day.toLocaleDateString("es-CH", options)

    const BASE_URL = "https://mindicador.cl/api/"

    useEffect(() => {
        fetch(BASE_URL)
            .then((response) => response.json())
            .then((data) => {
                setValorDolar(data.dolar.valor)
                setValorEuro(data.euro.valor)
    
            })
            .catch((error) => console.log("error", error))
    })

    function format(number) {
        return number.toFixed(4)
    }

    function handleAmount1Change(amount1) {
        setAmount1(amount1)
        setAmount2(format((amount1 * rates[currency1]) / rates[currency2]))
    }

    function handelCurrency1Change(currency1) {
        const a1 = amount1
        if (isNaN(a1)) {
            alert ('Ingrese una cantidad válida')
        }else{
            setAmount2(format((amount1 * rates[currency1]) / rates[currency2]))
            setCurrency1(currency1)
        }
    }

    function handleAmount2Change(amount2) {
        const a2 = amount2
        if (isNaN(a2)){
            alert("Ingrese una cantidad válida")
        }else{
            setAmount2(amount2)
            setAmount1(format((amount2 * rates[currency2]) / rates[currency1]))
        }
    }

    function handelCurrency2Change(currency2) {
        setAmount1(format((amount2 * rates[currency2]) / rates[currency1]))
        setCurrency2(currency2)
    }

    return (
        <div className="m-3">
            <div className="row">
                <div className="col">
                    <img className="img" src={Image} alt="imagen"></img>
                    <h1>Valor Dólar hoy: 1 USD {valorDolar} pesos Chilenos</h1>
                    <h2>Valor Euro hoy: 1 USD {valorEuro} pesos Chilenos</h2>
                    <span>Valor del dólar del día de hoy: {fechaHoy}</span>
                    <CurrencyInput
                        id="1"
                        onCurrencyChange={handelCurrency1Change}
                        onAmountChange={handleAmount1Change}
                        amount={amount1}
                        currencies={Object.keys(rates)}
                        currency={currency1}
                    />
                    <CurrencyInput
                        id="2"
                        onCurrencyChange={handelCurrency2Change}
                        onAmountChange={handleAmount2Change}
                        amount={amount2}
                        currencies={Object.keys(rates)}
                        currency={currency2}
                    />
                    <span>
                        {" "}
                        Información obtenida a través de la siguiente API:
                        https://mindicador.cl/api{" "}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Cambia
