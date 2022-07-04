import React from "react";
import styles from "./Exchange.module.css";
import { FaExchangeAlt } from "react-icons/fa";

const Convert = ({
  amount,
  onChangeAmount,
  onChangeFromCurrency,
  selectedFromCurrency,
  selectedToCurrency,
  options,
  replace,
  onChangeToCurrency,
  converCurrency,
  result,
  currencyString,
  disabled,
}) => {
  return (
    <>
      <div className={styles.conv}>
        <div className={styles.amount}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={onChangeAmount}
          />
        </div>
        <div className={styles.options}>
          <div>
            <label className={styles.label1}>From</label>
            <select
              disabled={disabled}
              className={styles.currency}
              onChange={onChangeFromCurrency}
              value={selectedFromCurrency}
            >
              {options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <button className={styles.replace} onClick={replace}>
            <FaExchangeAlt fontSize="25px" />
          </button>
          <div className={styles.options}>
            <label className={styles.label2}>To</label>
            <select
              className={styles.currency}
              onChange={onChangeToCurrency}
              value={selectedToCurrency}
            >
              {options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.convert} onClick={converCurrency}>
            Convert
          </button>
        </div>
        <div className={styles.result}>
          {result} {selectedToCurrency}
        </div>
        <div className={styles.conversion}>{currencyString}</div>
      </div>
    </>
  );
};

export default Convert;
