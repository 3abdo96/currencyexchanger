import React, { useState, useEffect } from "react";
import styles from "./TopCurrencies.module.css";
import {
  AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillPoundCircle,
} from "react-icons/ai";
import { HiCurrencyYen } from "react-icons/hi";
import {
  TbCurrencyDollarAustralian,
  TbCurrencyDollarCanadian,
  TbCurrencyFrank,
} from "react-icons/tb";
const TopCurrencies = ({ fromCurrency }) => {
  const [topCurrencies, setTopCurrencies] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "uthbx8qv3yxVb9bDpg54y9EHaDt6qdDd");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    fetch(
      `https://api.apilayer.com/fixer/latest?symbols=USD,EUR,GBP,AUD,CAD,JPY,CHF&base=${fromCurrency}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setTopCurrencies(result.rates);
      })
      .catch((error) => console.log("error", error));
  }, [fromCurrency]);

  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <div className={styles.head}>
          <h3>From {fromCurrency} To USD</h3>
          <AiFillDollarCircle fontSize="22px" color="white" />
        </div>
        <div className={styles.result}>
          <h4>Rank : #1</h4>
          <h4>Price : {topCurrencies.USD}</h4>
          <h4>Global Spread : 44.15%</h4>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.head}>
          <h3>From {fromCurrency} To EUR</h3>
          <AiFillEuroCircle fontSize="22px" color="white" />
        </div>
        <div className={styles.result}>
          <h4>Rank : #2</h4>
          <h4>Price : {topCurrencies.EUR}</h4>
          <h4>Global Spread : 16.14%</h4>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.head}>
          <h3>1. From {fromCurrency} To JPY</h3>
          <HiCurrencyYen fontSize="22px" color="white" />
        </div>
        <div className={styles.result}>
          <h4>Rank : #3</h4>
          <h4>Price : {topCurrencies.JPY}</h4>
          <h4>Global Spread : 8.40%</h4>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.head}>
          <h3>From {fromCurrency} To GBP</h3>
          <AiFillPoundCircle fontSize="22px" color="white" />
        </div>
        <div className={styles.result}>
          <h4>Rank : #4</h4>
          <h4>Price : {topCurrencies.GBP}</h4>
          <h4>Global Spread : 6.40%</h4>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.head}>
          <h3>From {fromCurrency} To AUD</h3>
          <TbCurrencyDollarAustralian fontSize="22px" color="white" />
        </div>
        <div className={styles.result}>
          <h4>Rank : #5</h4>
          <h4>Price : {topCurrencies.AUD}</h4>
          <h4>Global Spread : 3.38%</h4>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.head}>
          <h3>From {fromCurrency} To CAD</h3>
          <TbCurrencyDollarCanadian fontSize="22px" color="white" />
        </div>
        <div className={styles.result}>
          <h4>Rank : #6</h4>
          <h4>Price : {topCurrencies.CAD}</h4>
          <h4>Global Spread : 2.52%</h4>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.head}>
          <h3>From {fromCurrency} To CHF</h3>
          <TbCurrencyFrank fontSize="22px" color="white" />
        </div>
        <div className={styles.result}>
          <h4>Rank : #7</h4>
          <h4>Price : {topCurrencies.CHF}</h4>
          <h4>Global Spread : 2.48%</h4>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.head}>
          <h3>From {fromCurrency} To EUR</h3>
          <AiFillEuroCircle fontSize="22px" color="white" />
        </div>
        <div className={styles.result}>
          <h4>Rank : #2</h4>
          <h4>Price : {topCurrencies.EUR}</h4>
          <h4>Global Spread : 16.14%</h4>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.head}>
          <h3>From {fromCurrency} To USD</h3>
          <AiFillDollarCircle fontSize="22px" color="white" />
        </div>
        <div className={styles.result}>
          <h4>Rank : #1</h4>
          <h4>Price : {topCurrencies.USD}</h4>
          <h4>Global Spread : 44.15%</h4>
        </div>
      </div>
    </div>
  );
};

export default TopCurrencies;
