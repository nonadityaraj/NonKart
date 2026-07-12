export interface PriceOption {
  name: string;
  value: string;
}

export const priceRanges: PriceOption[] = [
  { name: "All Prices", value: "all" },
  { name: "Under ₹500", value: "under_500" },
  { name: "₹500 - ₹1000", value: "500_1000" },
  { name: "₹1000 - ₹2000", value: "1000_2000" },
  { name: "₹2000 - ₹5000", value: "2000_5000" },
  { name: "₹5000 - ₹10,000", value: "5000_10000" },
  { name: "₹10,000 - ₹15,000", value: "10000_15000" },
  { name: "₹15,000 - ₹20,000", value: "15000_20000" },
  { name: "Over ₹20,000", value: "over_20000" }
];
