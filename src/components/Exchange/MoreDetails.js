import React, { useEffect, useState } from "react";
import styles from "./MoreDetails.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
} from "chart.js";
import Convert from "./Convert";
import { Link } from "react-router-dom";
Chart.register(LinearScale, CategoryScale, PointElement, LineElement);
const MoreDetails = ({
  fromCurrency,
  toCurrency,
  options,
  onChangeFromCurrency,
  onChangeToCurrency,
  amount,
  onChangeAmount,
  result,
  converCurrency,
  selectedFromCurrency,
  selectedToCurrency,
  currencyString,
  replace,
  disabled,
}) => {
  const [cur, setCur] = useState([]);
  const [cur1, setCur1] = useState([]);
  const [symbol, setSymbol] = useState("");
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: cur,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        data: cur1,
        fill: false,
        borderColor: "rgb(0, 0, 0)",
        tension: 0.1,
      },
    ],
  };
  const option = {
    scales: {
      y: {
        ticks: {
          stepSize: 0.1,
        },
      },
    },
  };
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "uthbx8qv3yxVb9bDpg54y9EHaDt6qdDd");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      `https://api.apilayer.com/fixer/timeseries?start_date=2021-01-01&end_date=2021-12-31&symbols=${toCurrency}&base=${fromCurrency}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        let arr = [
          result.rates["2021-01-31"][toCurrency],
          result.rates["2021-02-28"][toCurrency],
          result.rates["2021-03-31"][toCurrency],
          result.rates["2021-04-30"][toCurrency],
          result.rates["2021-05-31"][toCurrency],
          result.rates["2021-06-30"][toCurrency],
          result.rates["2021-07-31"][toCurrency],
          result.rates["2021-08-31"][toCurrency],
          result.rates["2021-09-30"][toCurrency],
          result.rates["2021-10-31"][toCurrency],
          result.rates["2021-11-30"][toCurrency],
          result.rates["2021-12-31"][toCurrency],
        ];
        setCur(arr);
      })
      .catch((error) => console.log("error", error));
  }, [fromCurrency, toCurrency]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "uthbx8qv3yxVb9bDpg54y9EHaDt6qdDd");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      `https://api.apilayer.com/fixer/timeseries?start_date=2021-01-01&end_date=2021-12-31&symbols=${fromCurrency}&base=${toCurrency}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        let arr1 = [
          result.rates["2021-01-31"][fromCurrency],
          result.rates["2021-02-28"][fromCurrency],
          result.rates["2021-03-31"][fromCurrency],
          result.rates["2021-04-30"][fromCurrency],
          result.rates["2021-05-31"][fromCurrency],
          result.rates["2021-06-30"][fromCurrency],
          result.rates["2021-07-31"][fromCurrency],
          result.rates["2021-08-31"][fromCurrency],
          result.rates["2021-09-30"][fromCurrency],
          result.rates["2021-10-31"][fromCurrency],
          result.rates["2021-11-30"][fromCurrency],
          result.rates["2021-12-31"][fromCurrency],
        ];
        setCur1(arr1);
      })
      .catch((error) => console.log("error", error));
  }, [fromCurrency, toCurrency]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "uthbx8qv3yxVb9bDpg54y9EHaDt6qdDd");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setSymbol(result.symbols[fromCurrency]);
      })
      .catch((error) => console.log("error", error));
  }, [fromCurrency]);

  return (
    <>
      <div className={styles.fullname}>
        {fromCurrency} - {symbol}
      </div>
      <div className={styles.more}>
        <Convert
          amount={amount}
          onChangeAmount={onChangeAmount}
          onChangeFromCurrency={onChangeFromCurrency}
          selectedFromCurrency={selectedFromCurrency}
          selectedToCurrency={selectedToCurrency}
          options={options}
          replace={replace}
          onChangeToCurrency={onChangeToCurrency}
          converCurrency={converCurrency}
          result={result}
          currencyString={currencyString}
          disabled={disabled}
        />
        <button className={styles.back}>
          <Link to="/">Back To Home</Link>
        </button>
      </div>
      <div className={styles.chart}>
        <Line data={data} options={option} />
      </div>
    </>
  );
};

export default MoreDetails;
