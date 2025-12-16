import { Product } from "@/types/products";

const API_URL = "https://dummyjson.com/products";

export async function getProducts(
  limit: number,
  skip: number = 0
): Promise<Product[]> {
  const res = await fetch(
    `${API_URL}?limit=${limit}&skip=${skip}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await res.json();
  return data.products; 
}
