import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BasketContext = createContext();
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [isTotalOne, setIsTotalOne] = useState(false);
  const [isClearCart, setIsClearCart] = useState(false);

  //*AddToBasket
  const addToBasket = (product) => {
    //setBasket([...basket, product]);

    const found = basket.find((item) => item.id === product.id);
    if (found) {
      const updated = { ...found, amount: found.amount + 1 };
      const updatedProduct = basket.map((item) =>
        item.id === found.id ? updated : item
      );
      setBasket(updatedProduct);
    } else {
      setBasket(basket.concat({ ...product, amount: 1 }));
    }
    //console.log(basket);
  };
  //*removeFromBasket
  const removeFromBasket = (productID) => {
    const found = basket.find((item) => item.id === productID);

    if (found.amount > 1) {
      const decProduct = { ...found, amount: found.amount - 1 };
      const updatedProduct = basket.map((item) =>
        item.id === found.id ? decProduct : item
      );
      setBasket(updatedProduct);
    }
    if (found.amount === 1) {
      setIsTotalOne(true);
    }
  };
  //*deleteItem
  const deleteItem = (productID) => {
    const filteredItems = basket.filter((item) => item.id !== productID);
    setBasket(filteredItems);
  };
  //*Notify
  const notify = () =>
    toast.success("Thank you for rating us ❤️ ", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  //*Clear Cart
  const clearCart = () => {
    setBasket([]);
  };
  return (
    <BasketContext.Provider
      value={{
        basket,
        setBasket,
        isTotalOne,
        setIsTotalOne,
        addToBasket,
        removeFromBasket,
        notify,
        deleteItem,
        clearCart,
        isClearCart,
        setIsClearCart,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
