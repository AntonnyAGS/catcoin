import React from "react";

import "./style.css";

interface CoinProps {
  onPress: (value: number) => void;
  value: number;
  label: string;
}

const Coin = ({ onPress, value, label }: CoinProps): JSX.Element => (
  <button className="coin" onClick={() => onPress(value)}>
    {label}
  </button>
);

export default Coin;
