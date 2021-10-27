import { createContext, useState, ReactNode, useContext } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}
interface CardProps {
  children: ReactNode;
}
interface CartProviderData {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
}
export const CartContext = createContext<CartProviderData>(
  {} as CartProviderData
);

export const CartProvider = ({ children }: CardProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (ProductIndex: number) => {
    const newCart = cart.filter((_, index) => ProductIndex !== index);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
