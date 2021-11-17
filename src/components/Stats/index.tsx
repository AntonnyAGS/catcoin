import React, { useContext } from "react";
import { WorkManagerContext } from "../../contexts/work-manager.context";

import "./style.css";

export const Stats = (): JSX.Element => {
  const { amount, discount, isDiscountVisible } =
    useContext(WorkManagerContext);

  return (
    <>
      <div className="stats">
        <div className="stats-amount">
          <span>Seu dinheiro:</span> {amount} CAT COINS
        </div>

        {isDiscountVisible && (
          <div className="stats-discount">
            <span>Seu troco:</span> {discount} CAT COINS
          </div>
        )}
      </div>
    </>
  );
};

export default Stats;
