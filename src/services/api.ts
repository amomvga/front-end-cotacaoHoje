import axios from "axios";

export const coinBase = axios.create({
  baseURL: `https://economia.awesomeapi.com.br`,
});

export const marketBase = axios.create({
  baseURL: `https://www.alphavantage.co`,
});
