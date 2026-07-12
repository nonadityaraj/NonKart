export interface SubCategoryItem {
  name: string;
  id: string;
  parent_category: string;
  parent_category_id: string;
}

export interface SubCategoryType {
  title: string;
  id: string;
  items: SubCategoryItem[];
}

export const menSubCategories: SubCategoryType[] = [
  {
    title: "Topwear",
    id: "men-topwear",
    items: [
      {
        name: "T-Shirts",
        id: "men-topwear-t-shirts",
        parent_category: "Topwear",
        parent_category_id: "men-topwear"
      },
      {
        name: "Casual Shirts",
        id: "men-topwear-casual-shirts",
        parent_category: "Topwear",
        parent_category_id: "men-topwear"
      },
      {
        name: "Formal Shirts",
        id: "men-topwear-formal-shirts",
        parent_category: "Topwear",
        parent_category_id: "men-topwear"
      },
      {
        name: "Sweatshirts",
        id: "men-topwear-sweatshirts",
        parent_category: "Topwear",
        parent_category_id: "men-topwear"
      },
      {
        name: "Sweaters",
        id: "men-topwear-sweaters",
        parent_category: "Topwear",
        parent_category_id: "men-topwear"
      },
      {
        name: "Jackets",
        id: "men-topwear-jackets",
        parent_category: "Topwear",
        parent_category_id: "men-topwear"
      },
      {
        name: "Blazers & Coats",
        id: "men-topwear-blazers-coats",
        parent_category: "Topwear",
        parent_category_id: "men-topwear"
      },
      {
        name: "Suits",
        id: "men-topwear-suits",
        parent_category: "Topwear",
        parent_category_id: "men-topwear"
      },
      {
        name: "Raincoats",
        id: "men-topwear-raincoats",
        parent_category: "Topwear",
        parent_category_id: "men-topwear"
      }
    ]
  },
  {
    title: "Bottomwear",
    id: "men-bottomwear",
    items: [
      {
        name: "Jeans",
        id: "men-bottomwear-jeans",
        parent_category: "Bottomwear",
        parent_category_id: "men-bottomwear"
      },
      {
        name: "Casual Trousers",
        id: "men-bottomwear-casual-trousers",
        parent_category: "Bottomwear",
        parent_category_id: "men-bottomwear"
      },
      {
        name: "Formal Trousers",
        id: "men-bottomwear-formal-trousers",
        parent_category: "Bottomwear",
        parent_category_id: "men-bottomwear"
      },
      {
        name: "Shorts",
        id: "men-bottomwear-shorts",
        parent_category: "Bottomwear",
        parent_category_id: "men-bottomwear"
      },
      {
        name: "Track Pants",
        id: "men-bottomwear-track-pants",
        parent_category: "Bottomwear",
        parent_category_id: "men-bottomwear"
      },
      {
        name: "Pyjamas & Lounge Pants",
        id: "men-bottomwear-pyjamas-lounge-pants",
        parent_category: "Bottomwear",
        parent_category_id: "men-bottomwear"
      },
      {
        name: "Cargos",
        id: "men-bottomwear-cargos",
        parent_category: "Bottomwear",
        parent_category_id: "men-bottomwear"
      }
    ]
  },
  {
    title: "Footwear",
    id: "men-footwear",
    items: [
      {
        name: "Casual Shoes",
        id: "men-footwear-casual-shoes",
        parent_category: "Footwear",
        parent_category_id: "men-footwear"
      },
      {
        name: "Sports Shoes",
        id: "men-footwear-sports-shoes",
        parent_category: "Footwear",
        parent_category_id: "men-footwear"
      },
      {
        name: "Formal Shoes",
        id: "men-footwear-formal-shoes",
        parent_category: "Footwear",
        parent_category_id: "men-footwear"
      },
      {
        name: "Sneakers",
        id: "men-footwear-sneakers",
        parent_category: "Footwear",
        parent_category_id: "men-footwear"
      },
      {
        name: "Sandals & Floaters",
        id: "men-footwear-sandals-floaters",
        parent_category: "Footwear",
        parent_category_id: "men-footwear"
      },
      {
        name: "Flip Flops & Slippers",
        id: "men-footwear-flip-flops-slippers",
        parent_category: "Footwear",
        parent_category_id: "men-footwear"
      },
      {
        name: "Loafers",
        id: "men-footwear-loafers",
        parent_category: "Footwear",
        parent_category_id: "men-footwear"
      },
      {
        name: "Socks",
        id: "men-footwear-socks",
        parent_category: "Footwear",
        parent_category_id: "men-footwear"
      }
    ]
  },
  {
    title: "Watches & Accessories",
    id: "men-watches-accessories",
    items: [
      {
        name: "Watches",
        id: "men-watches-accessories-watches",
        parent_category: "Watches & Accessories",
        parent_category_id: "men-watches-accessories"
      },
      {
        name: "Belts",
        id: "men-watches-accessories-belts",
        parent_category: "Watches & Accessories",
        parent_category_id: "men-watches-accessories"
      },
      {
        name: "Wallets",
        id: "men-watches-accessories-wallets",
        parent_category: "Watches & Accessories",
        parent_category_id: "men-watches-accessories"
      },
      {
        name: "Sunglasses",
        id: "men-watches-accessories-sunglasses",
        parent_category: "Watches & Accessories",
        parent_category_id: "men-watches-accessories"
      },
      {
        name: "Caps & Hats",
        id: "men-watches-accessories-caps-hats",
        parent_category: "Watches & Accessories",
        parent_category_id: "men-watches-accessories"
      },
      {
        name: "Backpacks",
        id: "men-watches-accessories-backpacks",
        parent_category: "Watches & Accessories",
        parent_category_id: "men-watches-accessories"
      },
      {
        name: "Ties & Cufflinks",
        id: "men-watches-accessories-ties-cufflinks",
        parent_category: "Watches & Accessories",
        parent_category_id: "men-watches-accessories"
      },
      {
        name: "Perfumes & Deodorants",
        id: "men-watches-accessories-perfumes-deodorants",
        parent_category: "Watches & Accessories",
        parent_category_id: "men-watches-accessories"
      }
    ]
  },
  {
    title: "Ethnic & Innerwear",
    id: "men-ethnic-innerwear",
    items: [
      {
        name: "Kurtas & Kurta Sets",
        id: "men-ethnic-innerwear-kurtas-kurta-sets",
        parent_category: "Ethnic & Innerwear",
        parent_category_id: "men-ethnic-innerwear"
      },
      {
        name: "Ethnic Jackets",
        id: "men-ethnic-innerwear-ethnic-jackets",
        parent_category: "Ethnic & Innerwear",
        parent_category_id: "men-ethnic-innerwear"
      },
      {
        name: "Sherwani",
        id: "men-ethnic-innerwear-sherwani",
        parent_category: "Ethnic & Innerwear",
        parent_category_id: "men-ethnic-innerwear"
      },
      {
        name: "Dhotis",
        id: "men-ethnic-innerwear-dhotis",
        parent_category: "Ethnic & Innerwear",
        parent_category_id: "men-ethnic-innerwear"
      },
      {
        name: "Briefs & Trunks",
        id: "men-ethnic-innerwear-briefs-trunks",
        parent_category: "Ethnic & Innerwear",
        parent_category_id: "men-ethnic-innerwear"
      },
      {
        name: "Vests",
        id: "men-ethnic-innerwear-vests",
        parent_category: "Ethnic & Innerwear",
        parent_category_id: "men-ethnic-innerwear"
      },
      {
        name: "Nightwear",
        id: "men-ethnic-innerwear-nightwear",
        parent_category: "Ethnic & Innerwear",
        parent_category_id: "men-ethnic-innerwear"
      },
      {
        name: "Thermals",
        id: "men-ethnic-innerwear-thermals",
        parent_category: "Ethnic & Innerwear",
        parent_category_id: "men-ethnic-innerwear"
      }
    ]
  }
];

export default menSubCategories;
