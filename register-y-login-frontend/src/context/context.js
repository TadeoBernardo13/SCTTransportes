import { useState, useContext, createContext, useEffect } from "react";
import { getProductsRequests, createProductsRequests } from "../api/products";

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await getProductsRequests();
    console.log(res)
  };

  const createProduct = async (product) => {
    //const res = await createProductsRequests(product);
    console.log(product);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        createProduct /*
        deleteProduct,
        getProduct,
        updateProduct, */,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
