import React, { useContext } from "react";
import "./App.css";
import { WorkManagerContext } from "./contexts/work-manager.context";

// Components
import Coin from "./components/Coin";
import Stats from "./components/Stats";
import Container from "./components/Container";
import { CoinType } from "./entities/coin.enum";
import { CandiesLabel, CandiesPrice, CoinsLabel, CoinsValue } from "./utils";
import { CandyType } from "./entities/candy.enum";
import Candy from "./components/Candy";

function App() {
  const { addCoin, buyCandy, amount } = useContext(WorkManagerContext);

  const handleAddCoin = (value: number) => {
    addCoin(value);
  };

  const handleBuyCandy = (price: number) => {
    buyCandy(price);
  };

  const renderCoins = (): JSX.Element[] => {
    return Object.keys(CoinType).map((coin: string) => {
      const coinType = coin as CoinType;

      return (
        <Coin
          key={coin}
          onPress={handleAddCoin}
          value={CoinsValue[coinType]}
          label={CoinsLabel[coinType]}
        />
      );
    });
  };

  const canBuyCandy = (candyPrice: number): boolean => {
    return amount >= candyPrice;
  };

  const renderCandies = (): JSX.Element[] => {
    return Object.keys(CandyType).map((candy: string) => {
      const candyType = candy as CandyType;

      const price = CandiesPrice[candyType];

      return (
        <Candy
          key={candy}
          onPress={handleBuyCandy}
          price={price}
          label={CandiesLabel[candyType]}
          isEnabled={canBuyCandy(price)}
        />
      );
    });
  };

  return (
    <Container>
      <>
        <div className="stats-container">
          <Stats />
        </div>
        <div className="candies-container">
          {renderCandies()}
        </div>
        <div className="buttons-container">{renderCoins()}</div>
      </>
    </Container>
  );
}

export default App;
