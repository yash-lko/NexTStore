export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  slug: string;
  images: string[];
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
}

export interface ProductCardProps {
  product: Product;
}

export interface ProductDetailsSlug {
  slug: string;
}

export type FilterProps = {
  category: string;
  categories: string[];
  onCategoryChange: (category: string) => void;
};


export type SortingProps = {
  sort: SortType;
  onSortChange: (value: SortType) => void;
};
export type SortType = "default" | "lowToHigh" | "highToLow"
