import { useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchProducts, fetchProductsByCategory } from "../api/fakeStore";

export const useCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

export const useProducts = (category: string) =>
  useQuery({
    queryKey: ["products", category],
    queryFn: () =>
      category ? fetchProductsByCategory(category) : fetchProducts(),
  });  

  