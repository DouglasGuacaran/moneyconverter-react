import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Image from "../../../src/coin.svg";
import "./cambia.css";

function Cambia() {
    const currencies = [
        { code: 'USD', name: 'Dolar' },
        { code: 'EUR', name: 'Euro' },
        { code: 'CLP', name: 'Peso Chileno' },
        { code: 'BTC', name: 'Bitcoin' },
    ];
    
    const valorDolar = useSelector((state) => state.valorDolar);
    const valorEuro = useSelector((state) => state.valorEuro);
    const valorBitcoin = useSelector((state) => state.valorBitcoin);
    const valorDolarAPesoChileno = 1 / valorDolar;
    const valorEuroAPesoChileno = 1 / valorEuro;
    const valorBitcoinAPesoChileno = 1 / valorBitcoin;
    const [firstCurrency, setFirstCurrency] = useState(currencies[0].name)
    const [secondCurrency, setSecondCurrency] = useState(currencies[1].name)
    const [amount, setAmount] = useState('1.0')
    const [rateValue, setRate] = useState()
    const [rateValueInverted, setRateInverted] = useState()

    useEffect(() => {
        
        const conversionRates = {
            'Dolar-Euro': valorDolar / valorEuro,
            'Euro-Dolar': valorEuro / valorDolar,
            'Dolar-Bitcoin': valorDolar / valorBitcoin,
            'Bitcoin-Dolar': valorBitcoin / valorDolar,
            'Bitcoin-Euro': valorBitcoin / valorEuro,
            'Euro-Bitcoin': valorEuro / valorBitcoin,
            'Dolar-Peso Chileno': valorDolar,
            'Euro-Peso Chileno': valorEuro,
            'Bitcoin-Peso Chileno':valorBitcoin,
            'Peso Chileno-Dolar': valorDolarAPesoChileno,
            'Peso Chileno-Euro': valorEuroAPesoChileno,
            'Peso Chileno-Bitcoin': valorBitcoinAPesoChileno,
        };

        const conversionKey = `${firstCurrency}-${secondCurrency}`;
        const conversionKeyInverted = `${secondCurrency}-${firstCurrency}`;
        const conversionRate = conversionRates[conversionKey];
        const conversionRateInverted = conversionRates[conversionKeyInverted];
        
        if (conversionRate !== undefined) {
            setRate(format(amount * conversionRate));
            setRateInverted(format(amount * conversionRateInverted));
            

        } else {
            setRate(format(amount));
            setRateInverted(format(amount))
        }

    }, [valorDolar, valorEuro, valorBitcoin, valorDolarAPesoChileno, valorEuroAPesoChileno, valorBitcoinAPesoChileno, firstCurrency, secondCurrency, amount]);
    

    const day = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    const fechaHoy = day.toLocaleDateString("es-CH", options);
    function format(number) {
        return number.toFixed(3)
    }
        
    const handleOrigingCurrencyChange = (event) => {
        const nuevaMonedaOrigen = event.target.value;
        setFirstCurrency(nuevaMonedaOrigen);
        handleChangeAmount(event)
        setAmount(amount);
    };
    
    const handleDestinyCurrencyChange = (event) => {
        const nuevaMonedaDestino = event.target.value;
        setSecondCurrency(nuevaMonedaDestino);
        handleChangeAmount(event)
        setAmount(amount);
    };
    
    const handleIntercambioClick = () => {
        const temp = firstCurrency;
        setFirstCurrency(secondCurrency);
        setSecondCurrency(temp);
        setAmount(amount);
    };

    const handleChangeAmount = (event) => {
        const value = event.target.value;
        if (value === "" || isNaN(value)) {
            setAmount(1.0);
        } else if (value === "." && value <0) {
            alert('Ingrese un número mayor a cero')
        } else if (/^[0-9]*(\.[0-9]*)?$/.test(value)) {
            const parsedValue = parseFloat(value);
            if (!isNaN(parsedValue) && parsedValue > 0) {
                setAmount(parsedValue);
            } else {
                alert('Ingrese un número mayor a cero');
            }
        }
    }

    return (
    <div className="container-gl">
        <div className="row">
            <div className="col">
                <img className="img" src={Image} alt="imagen"></img>
                <h2>
                Convertir {firstCurrency} a {secondCurrency}
                </h2>
            </div>  
        </div>
        <div className="row">
            <div className="col-2">
                <input type="text" className="form-control" onChange={handleChangeAmount} id="floatingInput" placeholder="1.0"/>
            </div>
            <div className="col-4">
                <select
                className="form-select"
                value={firstCurrency}
                onChange={handleOrigingCurrencyChange}
                    >
                        {currencies.map((currency) => (
                        <option key={currency.code} value={currency.name}>
                            {currency.code + " - " + currency.name}
                        </option>
                        ))}
                </select>
            </div>
            <div className="col-1 zona-icono-intercambio">
                <button className="btn btn-light text-primary boton"type="button" onClick={handleIntercambioClick}>⇅</button>
            </div>
            <div className="col-4">
                <select
                className="form-select"
                value={secondCurrency}
                onChange={handleDestinyCurrencyChange}
                >
                    {currencies.map((currency) => (
                        <option key={currency.code} value={currency.name}>
                        {currency.code + " - " + currency.name}
                    </option>
                    ))}
                    <option value={secondCurrency}></option>
                </select>
            </div>
            <div className="row text-center">
                <div className="col align-self-start">
                    <p className="text align-self-start"> cantidad ingresada {amount}</p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col align-self-start">
                    <p className="text" id="tasa"> {amount} {firstCurrency} = {rateValue} {secondCurrency}</p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col align-self-start">
                    <p className="text" id="tasaInvertida"> {amount} {secondCurrency} = {rateValueInverted} {firstCurrency}</p>
                </div>
            </div>
            <div className="row">
                    <span>El valor del cambio de {amount} {firstCurrency} para el día de hoy {fechaHoy} equivale a {rateValue} {secondCurrency}. </span>
                    <span>
                    Información obtenida a través de la siguiente API:
                    https://mindicador.cl/api
                    </span>
            </div>
        </div>
    </div>
    );
}

export default Cambia;
