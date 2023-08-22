// actions.js
export const SET_VALOR_DOLAR = "SET_VALOR_DOLAR";
export const SET_VALOR_EURO = "SET_VALOR_EURO";
export const SET_VALOR_BITCOIN = "SET_VALOR_BITCOIN";

export const setValorDolar = (valorDolar) => ({
  type: SET_VALOR_DOLAR,
  payload: valorDolar,
});

export const setValorEuro = (valorEuro) => ({
  type: SET_VALOR_EURO,
  payload: valorEuro,
});

export const setValorBitcoin = (valorBitcoin) => ({
  type: SET_VALOR_BITCOIN,
  payload: valorBitcoin,
});
