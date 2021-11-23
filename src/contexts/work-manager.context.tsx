import React, { createContext, useEffect, useState } from "react";
import { CandyType } from "../entities/candy.enum";
import { CoinType } from "../entities/coin.enum";
import { CandiesPrice, CoinsValue } from "../utils";

const MACHINE_MAX_VALUE = 9;

// const STATES = [
//   [1, 2, 5, null, null, null],
//   [2, 3, 6, ]
// ]

// const STATES: Record<string, string | number> = {
//   '0,1': 1,
//   '0,2': 2,
//   '0,5': 5,
//   '0,A': 0,
//   '0,B': 0,
//   '0,C': 0,

//   '1,1': 2,
//   '1,2': 3,
//   '1, 5': 6,
//   '1, A': 1,
//   '1, B': 1,
//   '1, C': 1,

//   '2, 1': 3,
//   '':
// }
interface WorkManagerContextProps {
  amount: number;
  discount: number;
  isDiscountVisible: boolean;
  isBuying: boolean;
  selectedCandy?: CandyType;
  machine: [[number, number | string]] | null;
  machineState: number;
  addCoin(coin: CoinType): void;
  buyCandy(candy: CandyType): void;
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
  const [discount, setDiscount] = useState(0);

  const [isDiscountVisible, setIsDiscountVisible] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const [selectedCandy, setSelectedCandy] = useState<CandyType>();

  const [machineState, setMachineState] = useState(0);
  const [machine, setMachine] = useState<[[number, number | string]] | null>(
    null
  );

  const addCoin = (coin: CoinType) => {
    const totalAmount = amount + CoinsValue[coin];
    addCoinToAutomateState(coin);
    setAmount(totalAmount);
  };

  const buyCandy = (candy: CandyType) => {
    setSelectedCandy(candy);
    setIsBuying(true);

    const totalAmount = amount - CandiesPrice[candy];

    addCandyToAutomate(candy, totalAmount);

    setDiscount(totalAmount);
    setIsDiscountVisible(true);
    setAmount(0);
  };

  const addCoinToAutomateState = (coin: CoinType) => {
    const value = CoinsValue[coin] + amount;

    const resultValue = value >= MACHINE_MAX_VALUE ? MACHINE_MAX_VALUE : value;

    const defaultMachine = machine || ([[]] as unknown as [[number, number]]);
    defaultMachine.push([machineState, resultValue]);

    if (!machine) {
      defaultMachine.splice(0, 1);
    }

    setMachineState(resultValue);
    setMachine(defaultMachine);
  };

  const addCandyToAutomate = (candy: CandyType, discount: number) => {
    machine!.push([machineState, `${candy}-${discount}`]);
    setMachine(machine);
    setMachineState(0);
  };

  useEffect(() => {
    if (selectedCandy) {
      document
        .getElementById(`candy-${selectedCandy}`)
        ?.classList.remove("animate__fadeIn");
      document
        .getElementById(`candy-${selectedCandy}`)
        ?.classList.add("animate__fadeOutDown");
    }
  }, [selectedCandy]);

  useEffect(() => {
    if (!isDiscountVisible) {
      return;
    }

    setTimeout(() => {
      setIsDiscountVisible(false);
      setIsBuying(false);
      document
        .getElementById(`candy-${selectedCandy}`)
        ?.classList.remove("animate__fadeOutDown");
      document
        .getElementById(`candy-${selectedCandy}`)
        ?.classList.add("animate__fadeIn");
      setSelectedCandy(undefined);
    }, 3000);
  }, [isDiscountVisible, selectedCandy]);

  return (
    <WorkManagerContext.Provider
      value={{
        amount,
        selectedCandy,
        discount,
        isDiscountVisible,
        machine,
        isBuying,
        machineState,
        addCoin,
        buyCandy,
      }}
    >
      {children}
    </WorkManagerContext.Provider>
  );
};
