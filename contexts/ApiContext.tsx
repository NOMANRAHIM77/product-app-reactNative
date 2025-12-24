import React, { createContext, useState } from "react";
import { showToast } from "../utils/toast";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const pageSize = 5; // Simulate pagination

  const fetchProducts = async (refresh = false) => {
    try {
      if (refresh) {
        setRefreshing(true);
        setPage(1);
      }

      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      const paginated = data.slice((page - 1) * pageSize, page * pageSize);

      setProducts(refresh ? paginated : [...products, ...paginated]);
      setPage((prev) => prev + 1);
    } catch {
      showToast("Failed to load products");
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <ApiContext.Provider
      value={{ products, fetchProducts, refreshing, setRefreshing }}
    >
      {children}
    </ApiContext.Provider>
  );
};
