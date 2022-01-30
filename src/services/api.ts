import axios from "axios";

export const coinBase = axios.create({
  baseURL: `https://economia.awesomeapi.com.br`,
});

const symbol = "PETR4.SA";

export  const marketBase = axios.create({
  baseURL: `https://www.alphavantage.co`,

});





