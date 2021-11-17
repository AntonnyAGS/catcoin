import React, { useContext } from "react";
import "./App.css";
import { WorkManagerContext } from "./contexts/work-manager.context";

// Components
import Coin from "./components/Coin";
import Stats from "./components/Stats";
import Container from "./components/Container";
import Candy from "./components/Candy";
import { CoinType } from "./entities/coin.enum";
import { CandiesLabel, CandiesPrice, CoinsLabel, CoinsValue } from "./utils";
import { CandyType } from "./entities/candy.enum";
import SideContainer from "./components/SideContainer";

function App() {
  const { addCoin, buyCandy, amount, isDiscountVisible } = useContext(WorkManagerContext);

  const handleAddCoin = (coin: CoinType) => {
    addCoin(coin);
  };

  const handleBuyCandy = (candy: CandyType) => {
    buyCandy(candy);
  };

  const renderCoins = (): JSX.Element[] => {
    return Object.keys(CoinType).map((coin: string) => {
      const coinType = coin as CoinType;

      return (
        <Coin
          key={coin}
          isActive={!isDiscountVisible}
          coin={coinType}
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
          type={candyType}
          label={CandiesLabel[candyType]}
          isEnabled={canBuyCandy(price)}
        />
      );
    });
  };

  return (
    <div className="container-outer">
      <Container>
        <>
          <div className="container-title">CatCoin</div>
          <div className="candies-container">{renderCandies()}</div>
          <div className="buttons-container">{renderCoins()}</div>
        </>
      </Container>
      <SideContainer>
        <>
          <div className="stats-container">
            <Stats />
          </div>
        </>
      </SideContainer>
    </div>
  );
}

export default App;
