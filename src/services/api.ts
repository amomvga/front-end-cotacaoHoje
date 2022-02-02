import axios from "axios";

export const coinBase = axios.create({
  baseURL: `https://economia.awesomeapi.com.br`,
});
