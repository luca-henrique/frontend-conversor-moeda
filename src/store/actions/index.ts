const api_key = '4Q9IMtIIUpxGo0PsLgw6LHr5CiPqB3JA';
import axios from 'axios';
const BASE_URL = 'https://apilayer.net/api';

export const CONVERT_COIN_REQUEST = 'CONVERT_COIN_REQUEST';

export function converteMoedas(converte: any) {
  const url = `${BASE_URL}/convert?acess_key=${api_key}`;

  const params = {
    from: converte.de,
    to: converte.para,
    amount: converte.valor,
    format: 1,
  };

  const request = axios.get(url, params);

  return {
    type: CONVERT_COIN_REQUEST,
    payload: request,
  };
}
