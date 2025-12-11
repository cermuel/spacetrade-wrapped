export interface UserData {
  name: string;
  totalTrades: number;
  totalVolume: string;
  favoriteAsset: string;
  tradingStreak: number;
  rank: string;
  percentile: string;
  topTransaction: string;
  giftcardsTraded: number;
  billsPaid: number;
  referrals: number;
  joinedMonth: string;
}

export const sampleUserData: UserData = {
  name: "Samuel",
  totalTrades: 247,
  totalVolume: "₦8,117,000",
  favoriteAsset: "Ethereum",
  tradingStreak: 45,
  rank: "Diamond Trader",
  percentile: "top 3%",
  topTransaction: "₦450,000",
  giftcardsTraded: 12,
  billsPaid: 34,
  referrals: 8,
  joinedMonth: "March",
};
