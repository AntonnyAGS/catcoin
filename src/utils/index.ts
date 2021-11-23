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
  [CandyType.A]: "A",
  [CandyType.B]: "B",
  [CandyType.C]: "C",
};

export const CandiesPrice: Record<CandyType, number> = {
  [CandyType.A]: 6,
  [CandyType.B]: 7,
  [CandyType.C]: 8,
};
