import React, { useContext } from "react";
import { WorkManagerContext } from "../../contexts/work-manager.context";

export const Stats = (): JSX.Element =>  {
  const { amount } = useContext(WorkManagerContext);
  
  return (
    <div>
      Seu dinheiro: { amount } CAT COINS
    </div>
  );
}

export default Stats;