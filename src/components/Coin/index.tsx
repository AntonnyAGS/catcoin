import React from "react";
import { CoinType } from "../../entities/coin.enum";

import "./style.css";

interface CoinProps {
  onPress: (value: CoinType) => void;
  value: number;
  label: string;
  coin: CoinType;
  isActive: boolean;
}

const Coin = ({ onPress, value, label, coin, isActive }: CoinProps): JSX.Element => (
  <button className="coin" id={`coin-${coin}`} disabled={!isActive} onClick={() => onPress(coin)}>
    {label}
  </button>
);

export default Coin;
