// reducers.js
import { SET_VALOR_DOLAR, SET_VALOR_EURO, SET_VALOR_BITCOIN } from "./actions";

const initialState = {
    valorDolar: 0,
    valorEuro: 0,
    valorBitcoin:0,
    };

    const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALOR_DOLAR:
        return { ...state, valorDolar: action.payload };
        case SET_VALOR_EURO:
        return { ...state, valorEuro: action.payload };
        case SET_VALOR_BITCOIN:
        return { ...state, valorBitcoin: action.payload };
        default:
        return state;
    }
    };

export default reducer;