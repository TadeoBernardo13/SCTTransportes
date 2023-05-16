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
    console.log(res);
  };

  /* const createProduct = async (product) => {
    try {
      const res = await createProductsRequests(product);
      setProducts([...products, res.data]);
    } catch (error) {
      console.log(error);
    }
  }; */

  /* const deleteProduct = async (id) => {
    await deleteProductRequest(id);
    setProducts(products.filter((product) => product._id !== id));
  }; */

  /* const getProduct = async (id) => {
    const res = await getProductRequests(id);
    return res.data;
  }; */

  /* const updateProduct = async (id, product) => {
    const res = await updateProductRequests(id, product);
    setProducts(
      products.map((product) => (product._id === id ? res.data : product))
    );
  }; */
  /* useEffect(() => {
    getProducts();
  }, []); */
  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts/* ,
        createProduct,
        deleteProduct,
        getProduct,
        updateProduct, */
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
