import { CandyType } from "../entities/candy.enum";
import { CoinType } from "../entities/coin.enum";

export const CoinsLabel: Record<CoinType, string> = {
  [CoinType.ONE]: "CC1",
  [CoinType.TWO]: "CC2",
  [CoinType.FIVE]: "CC5",
};

export const CoinsValue: Record<CoinType, number> = {
  [CoinType.ONE]: 1,
  [CoinType.TWO]: 2,
  [CoinType.FIVE]: 5,
};

export const CandiesLabel: Record<CandyType, string> = {
  [CandyType.CandyA]: "A",
  [CandyType.CandyB]: "B",
  [CandyType.CandyC]: "C",
};

export const CandiesPrice: Record<CandyType, number> = {
  [CandyType.CandyA]: 6,
  [CandyType.CandyB]: 7,
  [CandyType.CandyC]: 8,
};
