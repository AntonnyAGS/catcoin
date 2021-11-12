import React from "react";

import "./style.css";

interface CandyProps {
  onPress: (price: number) => void;
  label: string;
  price: number;
  isEnabled: boolean;
}

const Candy = ({
  onPress,
  label,
  price,
  isEnabled,
}: CandyProps): JSX.Element => (
  <button
    className="candy"
    disabled={!isEnabled}
    onClick={() => onPress(price)}
  >
    {" "}
    {label} - {price}CC
  </button>
);

export default Candy;
