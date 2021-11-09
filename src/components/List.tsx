import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function List() {
  const [coin, setCoin] = useState({
    name: null,
    bid: null,
    high: null,
    low: null,
  });

  useEffect(() => {
    axios
      .get(`https://catacaohoje-backend.herokuapp.com/price/USD-BRL`)
      .then((response) => {
        setCoin(response.data.USDBRL);
      });
  }, []);

  const getData = (url, res) =>
    axios
      .get(`https://catacaohoje-backend.herokuapp.com/price/` + url)
      .then((response) => {
        setCoin(response.data[res]);
      });

  const handlerClick = (coin) => {
    switch (coin) {
      case "dolar":
        getData("USD-BRL", "USDBRL");
        break;
      case "euro":
        getData("EUR-BRL", "EURBRL");
        break;
      case "cad":
        getData("CAD-BRL", "CADBRL");
        break;
      case "aud":
        getData("AUD-BRL", "AUDBRL");
        break;
      case "gbp":
        getData("GBP-BRL", "GBPBRL");
        break;
    }
  };

  return (
    <div>
      <div className="icn">
        <ul>
          <li>
            <a onClick={() => handlerClick("aud")}>
              <Image src="/img/australia_flag.jpg" width={100} height={100} />
            </a>
          </li>
          <li>
            <a onClick={() => handlerClick("cad")}>
              <Image src="/img/canada_flag.jpg" width={100} height={100} />
            </a>
          </li>
          <li>
            <a onClick={() => handlerClick("dolar")}>
              <Image
                src="/img/united_states_flag.jpg"
                width={100}
                height={100}
              />
            </a>
          </li>
          <li>
            <a onClick={() => handlerClick("euro")}>
              <Image src="/img/europe_flag.jpg" width={100} height={100} />
            </a>
          </li>
          <li>
            <a onClick={() => handlerClick("gbp")}>
              <Image
                src="/img/united_kingdom_flag.jpg"
                width={100}
                height={100}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="prices">
        <ul>
          <li>Conversão: {coin.name}</li>
          <li>Valor: R${Number(coin.bid).toFixed(2)}</li>
          <li>Máxima: R${Number(coin.high).toFixed(2)}</li>
          <li>Minima: R${Number(coin.low).toFixed(2)}</li>
        </ul>
      </div>
    </div>
  );
}
