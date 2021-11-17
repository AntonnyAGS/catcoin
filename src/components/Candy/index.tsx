import React from "react";

import { CandyType } from "../../entities/candy.enum";

import "./style.css";

interface CandyProps {
  onPress: (candy: CandyType) => void;
  label: string;
  price: number;
  isEnabled: boolean;
  type: CandyType;
}

const Candy = ({
  onPress,
  label,
  price,
  isEnabled,
  type,
}: CandyProps): JSX.Element => {
  return (
    <button
      id={`candy-${type}`}
      className="candy animate__animated animate__fadeIn"
      disabled={!isEnabled}
      onClick={() => onPress(type)}
    >
      {" "}
      {label} - {price}CC
    </button>
  );
};

export default Candy;
