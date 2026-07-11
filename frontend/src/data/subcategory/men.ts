export interface SubCategoryType {
  title: string;
  items: string[];
}

export const electronicsSubCategories: SubCategoryType[] = [
  {
    title: "Mobiles",
    items: [
      "Mi",
      "Realme",
      "Samsung",
      "Infinix",
      "OPPO",
      "Apple",
      "Vivo",
      "Honor",
      "Asus",
      "Poco X2",
      "realme Narzo 10",
      "Infinix Hot 9",
      "IQOO 3",
      "iPhone SE"
    ]
  },
  {
    title: "Mobile Accessories",
    items: [
      "Mobile Cases",
      "Headphones & Headsets",
      "Power Banks",
      "Screenguards",
      "Memory Cards",
      "Smart Headphones",
      "Mobile Cables",
      "Mobile Chargers",
      "Mobile Holders"
    ]
  },
  {
    title: "Smart Wearable Tech",
    items: [
      "Smart Watches",
      "Smart Glasses (VR)",
      "Smart Bands"
    ]
  },
  {
    title: "Laptops",
    items: [
      "Gaming Laptops",
      "Desktop PCs",
      "Gaming & Accessories",
      "Computer Accessories",
      "External Hard Disks",
      "Pendrives",
      "Laptop Skins & Decals",
      "Laptop Bags",
      "Mouse",
      "Computer Peripherals",
      "Printers & Ink Cartridges",
      "Monitors"
    ]
  },
  {
    title: "Tablets",
    items: [
      "Apple iPads"
    ]
  }
];

export default electronicsSubCategories;
