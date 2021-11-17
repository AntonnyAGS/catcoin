import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import { CandyType } from "../entities/candy.enum";
import { CoinType } from "../entities/coin.enum";
import { CandiesPrice, CoinsValue } from "../utils";

interface WorkManagerContextProps {
  amount: number;
  discount: number;
  isDiscountVisible: boolean;
  isBuying: boolean;
  selectedCandy?: CandyType;
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

  const addCoin = (coin: CoinType) => {
    const totalAmount = amount + CoinsValue[coin];

    setAmount(totalAmount);
  };

  const buyCandy = (candy: CandyType) => {
    setSelectedCandy(candy);
    setIsBuying(true);

    const totalAmount = amount - CandiesPrice[candy];

    setDiscount(totalAmount);
    setIsDiscountVisible(true);
    setAmount(0);
  };


  useEffect(() => {
    if(selectedCandy) {
      document.getElementById(`candy-${selectedCandy}`)?.classList.remove('animate__fadeIn');
      document.getElementById(`candy-${selectedCandy}`)?.classList.add('animate__fadeOutDown');
    }

  }, [selectedCandy])

  useEffect(() => {
    if (!isDiscountVisible) {
      return;
    }

    setTimeout(() => {
      setIsDiscountVisible(false);
      setIsBuying(false);
      document.getElementById(`candy-${selectedCandy}`)?.classList.remove('animate__fadeOutDown');
      document.getElementById(`candy-${selectedCandy}`)?.classList.add('animate__fadeIn');
      setSelectedCandy(undefined);
    }, 3000);
  }, [isDiscountVisible, selectedCandy]);

  return (
    <WorkManagerContext.Provider
      value={{
        addCoin,
        amount,
        buyCandy,
        selectedCandy,
        discount,
        isDiscountVisible,
        isBuying,
      }}
    >
      {children}
    </WorkManagerContext.Provider>
  );
};
