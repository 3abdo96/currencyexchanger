import React from "react";
import MoreDetails from "./MoreDetails";

const FirstExchangeDetails = ({
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
        toCurrency="USD"
        options={options}
        amount={amount}
        result={amount * 1.042857}
        selectedFromCurrency="EUR"
        selectedToCurrency="USD"
        currencyString="1.00 EUR = 1.042857 USD"
        onChangeFromCurrency={onChangeFromCurrency}
        onChangeToCurrency={onChangeToCurrency}
        onChangeAmount={onChangeAmount}
      />
    </>
  );
};

export default FirstExchangeDetails;
