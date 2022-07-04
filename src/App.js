import React, { useEffect, useState } from "react";
import Header from "./components/Layout/Header";
import Card from "./components/UI/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exchange from "./components/Exchange/Exchange";
import FirstExchangeDetails from "./components/Exchange/FirstExchangeDetails";
import SecondExchangeDetails from "./components/Exchange/SecondExchangeDetails";
import MoreDetails from "./components/Exchange/MoreDetails";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [exchangeRate, setExchangeRate] = useState();
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [result, setResult] = useState();
  const [amount, setAmount] = useState(1);
  const [currencyString, setCurrencyString] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(true);

  let toAmount, fromAmount;

  fromAmount = amount;
  toAmount = amount * exchangeRate;

  useEffect(
    () => {
      var myHeaders = new Headers();
      myHeaders.append("apikey", "uthbx8qv3yxVb9bDpg54y9EHaDt6qdDd");

      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      fetch(
        "https://api.apilayer.com/fixer/latest?symbols=&base=",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          const firstCurrency = Object.keys(result.rates)[149];
          setCurrencies([...Object.keys(result.rates)]);
          setFromCurrency(result.base);
          setToCurrency(firstCurrency);
          setExchangeRate(result.rates[toCurrency]);
          setLoading(false);
        })
        .catch((error) => console.log("error", error));
    },
    // eslint-disable-next-line
    []
  );
  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      var myHeaders = new Headers();
      myHeaders.append("apikey", "uthbx8qv3yxVb9bDpg54y9EHaDt6qdDd");

      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      fetch(
        `https://api.apilayer.com/fixer/latest?symbols=${toCurrency}&base=${fromCurrency}`,
        requestOptions
      )
        .then((res) => res.json())
        .then((data) => {
          setExchangeRate(data.rates[toCurrency]);
          setLoading(false);
        })
        .catch((error) => console.log("error", error));
    }
  }, [fromCurrency, toCurrency]);

  const changeAmountHandler = (e) => {
    setAmount(e.target.value);
  };
  const convertHandler = () => {
    setResult(toAmount);
    setDisabled(true);
    setCurrencyString(`1.00 ${fromCurrency} = ${exchangeRate} ${toCurrency}`);
  };
  const replaceHandler = () => {
    let fromCur, toCurr, temp;

    fromCur = fromCurrency;
    toCurr = toCurrency;
    temp = fromCur;
    fromCur = toCurr;
    toCurr = temp;
    setFromCurrency(fromCur);
    setToCurrency(toCurr);
  };
  return (
    <Card>
      <Router>
        <Header />
        {!loading ? (
          <Routes>
            <Route
              path="/"
              element={
                <Exchange
                  options={currencies}
                  onChangeFromCurrency={(e) => setFromCurrency(e.target.value)}
                  onChangeToCurrency={(e) => setToCurrency(e.target.value)}
                  amount={fromAmount}
                  result={result}
                  onChangeAmount={changeAmountHandler}
                  converCurrency={convertHandler}
                  replace={replaceHandler}
                  selectedFromCurrency={fromCurrency}
                  selectedToCurrency={toCurrency}
                  currencyString={currencyString}
                />
              }
            />
            <Route
              path="/FirstExchangeDetails"
              element={
                <FirstExchangeDetails
                  options={currencies}
                  amount={fromAmount}
                  onChangeFromCurrency={(e) => setFromCurrency(e.target.value)}
                  onChangeToCurrency={(e) => setToCurrency(e.target.value)}
                  onChangeAmount={changeAmountHandler}
                />
              }
            />
            <Route
              path="/SecondExchangeDetails"
              element={
                <SecondExchangeDetails
                  options={currencies}
                  amount={fromAmount}
                  onChangeFromCurrency={(e) => setFromCurrency(e.target.value)}
                  onChangeToCurrency={(e) => setToCurrency(e.target.value)}
                  onChangeAmount={changeAmountHandler}
                />
              }
            />
            <Route
              path="/MoreDetails"
              element={
                <MoreDetails
                  disabled={disabled}
                  fromCurrency={fromCurrency}
                  toCurrency={toCurrency}
                  options={currencies}
                  onChangeFromCurrency={(e) => setFromCurrency(e.target.value)}
                  onChangeToCurrency={(e) => setToCurrency(e.target.value)}
                  amount={fromAmount}
                  result={result}
                  onChangeAmount={changeAmountHandler}
                  converCurrency={convertHandler}
                  replace={replaceHandler}
                  selectedFromCurrency={fromCurrency}
                  selectedToCurrency={toCurrency}
                  currencyString={currencyString}
                />
              }
            />
          </Routes>
        ) : (
          <h3>Loading...</h3>
        )}
      </Router>
    </Card>
  );
}

export default App;
