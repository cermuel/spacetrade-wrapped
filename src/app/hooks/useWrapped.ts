/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";

export interface WrappedResponse {
  user: User;
  year: number;
  total_trade: Total_trade;
  best_month: Best_month;
  top_cryptos: Top_crypto[];
  top_gift_cards: Top_gift_card[];
  top_utility: Top_utility[];
  total_bill: Total_bill;
  total_withdrawal: Total_withdrawal;
  total_transfer: Total_transfer;
  total_referrals: Total_referrals;
  badge: Badge;
  percentile_rank: number;
}

interface User {
  id: number;
  username: string;
  photo: string;
}

interface Total_trade {
  usd: number;
  naira: number;
  count: number;
}

interface Best_month {
  month: string;
  naira_total: number;
  trade_count: number;
}

interface Crypto {
  id: number;
  name: string;
  code: string;
  icon: string;
  networks: string;
  status: number;
  created_at: string;
  updated_at: string;
  is_stable: number;
  color: string;
  minimumDeposit: string;
  maximumDecimalPlaces: number;
}

interface Top_crypto {
  crypto_symbol: string;
  usd_total: string;
  naira_total: string;
  crypto: Crypto;
}

interface Gift_card {
  id: number;
  title: string;
  image: string;
  brand_logo: string;
  service_id: number;
  updated_by: number;
  status: number;
  created_at: string;
  updated_at: string;
}

interface Top_gift_card {
  gift_card_id: number;
  usd_total: number;
  naira_total: number;
  gift_card: Gift_card;
}

interface Top_utility {
  type: string;
  service_icon: string;
  total: string;
}

interface Total_bill {
  count: number;
  amount: string;
}

interface Total_withdrawal {
  count: number;
  amount: string;
}

interface Total_transfer {
  count: number;
  amount: string;
}

interface Total_referrals {
  count: number;
  amount: string;
}

interface Badge {
  id: number;
  title: string;
  min_points: number;
  max_points: number;
  index: number;
  status: number;
  description: string;
  badge: string;
  rewards: string;
  how_to_get_points: string;
  start_color: string;
  end_color: string;
  data: any;
  created_at: string;
  updated_at: string;
}
const BASE_URI: string = process.env.NEXT_PUBLIC_BASE_URI as string;

export function useWrappedData(username: string) {
  return useQuery<WrappedResponse>({
    queryKey: ["wrapped", username],

    queryFn: async () => {
      const response = await fetch(`${BASE_URI}/api/rewind/2025`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Wrapped data");
      }

      return response.json();
    },

    enabled: !!username,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60 * 24,
  });
}
