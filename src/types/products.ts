
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




export interface ProductCardProps {
    product: Product;
}

export interface ProductDetailsSlug {
  slug: string;
}