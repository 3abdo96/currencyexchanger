import React from "react";
import MoreDetails from "./MoreDetails";

const SecondExchangeDetails = ({
  options,
  amount,
  onChangeFromCurrency,
  onChangeToCurrency,
  onChangeAmount,
}) => {
  return (
    <>
      <MoreDetails
        disabled={true}
        fromCurrency="EUR"
        toCurrency="GBP"
        options={options}
        amount={amount}
        result={amount * 0.86151}
        selectedFromCurrency="EUR"
        selectedToCurrency="GBP"
        currencyString="1.00 EUR = 0.86151 USD"
        onChangeFromCurrency={onChangeFromCurrency}
        onChangeToCurrency={onChangeToCurrency}
        onChangeAmount={onChangeAmount}
      />
    </>
  );
};

export default SecondExchangeDetails;
