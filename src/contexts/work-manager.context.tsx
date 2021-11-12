import React, { createContext, useState } from "react";

interface WorkManagerContextProps {
  amount: number;
  addCoin(value: number): void;
  buyCandy(price: number): void;
}

export const WorkManagerContext = createContext<WorkManagerContextProps>(
  {} as WorkManagerContextProps
);

export const WorkManagerProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [amount, setAmount] = useState(0);

  const addCoin = (value: number) => {
    const totalAmount = amount + value;

    setAmount(totalAmount);
  };

  const buyCandy = (price: number) => {
    const totalAmount = amount - price;

    setAmount(totalAmount);
  };

  return (
    <WorkManagerContext.Provider value={{ addCoin, amount, buyCandy }}>
      {children}
    </WorkManagerContext.Provider>
  );
};
