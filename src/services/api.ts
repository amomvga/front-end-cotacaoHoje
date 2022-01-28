import axios from "axios";

export const coinBase = axios.create({
  baseURL: `https://economia.awesomeapi.com.br`,
});

const apiKey = "Z7BUML9FVYC4BBSQ";

const symbol = "PETR4.SA";

export const marketBase = axios.create({
  baseURL: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=5min&apikey=${apiKey}`,
});
