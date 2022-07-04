import React from "react";
import styles from "./Header.module.css";
import { BsCurrencyExchange } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <BsCurrencyExchange fontSize="50px" />
            <h3>Currency Converter</h3>
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link to="/FirstExchangeDetails">EUR-USD Details</Link>
          <Link to="/SecondExchangeDetails">EUR-GBP Details</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
