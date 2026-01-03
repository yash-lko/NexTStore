import { Product } from "@/types/products";

const API_URL = "https://api.escuelajs.co/api/v1/products";

export async function getProducts(
  limit: number,
  offset: number = 0
): Promise<Product[]> {
  const res = await fetch(
    `${API_URL}?limit=${limit}&offset=${offset}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
}



export async function getFun(){
      const res=await fetch(`${API_URL}`,
        {cache:"no-cache"}
      );
      if(!res.ok){
        throw new Error("Something Went Wrong");
      }

      return res.json();
}



