export interface DiscountOption {
  name: string;
  value: string;
}

export const discountOptions: DiscountOption[] = [
  { name: "All Discounts", value: "all" },
  { name: "10% Off & Above", value: "10" },
  { name: "20% Off & Above", value: "20" },
  { name: "30% Off & Above", value: "30" },
  { name: "40% Off & Above", value: "40" },
  { name: "50% Off & Above", value: "50" },
  { name: "60% Off & Above", value: "60" },
  { name: "70% Off & Above", value: "70" }
];
