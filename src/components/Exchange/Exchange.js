import styles from "./Exchange.module.css";
import { Link } from "react-router-dom";
import TopCurrencies from "./TopCurrencies";
import Convert from "./Convert";
const Exchange = ({
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
}) => {
  return (
    <>
      <div className={styles.exchange}>
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
        />

        <div>
          <button className={styles.details}>
            <Link to="/MoreDetails">More Details</Link>
          </button>
        </div>
      </div>
      <TopCurrencies fromCurrency={selectedFromCurrency} />
    </>
  );
};

export default Exchange;
