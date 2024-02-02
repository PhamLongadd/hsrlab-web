import { getHardwareToolById, getHardwareToolbyIds } from "@/pages/api";
import { title } from "process";
import React, { createContext, useContext, useEffect, useState } from "react";

type CartContextValue = {
  addItem: (id: number) => void;
  minusQuantity: (id: number) => void;
  deleteItem: (id: number) => void;
  plusQuantity: (id: number) => void;
  currentCart: CartItem[];
  getProductItems: () => Promise<ProductItem[] | undefined>;
};

const CartCountContext = createContext<CartContextValue | undefined>(undefined);

interface CartCountProviderProps {
  children: React.ReactNode;
}

type CartItem = {
  id: number;
  quantity: number;
};

export type ProductItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

export const CartCountProvider: React.FC<CartCountProviderProps> = ({
  children,
}: CartCountProviderProps) => {
  const [currentCart, setCurrentCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storageCart = localStorage.getItem("cart");
    if (storageCart) {
      setCurrentCart(JSON.parse(storageCart));
    } else {
      setCurrentCart([]);
    }
  }, []);

  useEffect(() => {
    syncCartToLocalStorage();
  }, [currentCart]);

  const getProductItems = async (): Promise<ProductItem[] | undefined> => {
    const ids = currentCart.map((item) => item.id);

    if (ids.length <= 0) {
      return [];
    } else {
      try {
        const res = await getHardwareToolbyIds(ids);

        return currentCart.map((item): ProductItem => {
          const itemInApi = res.data.find((i: any) => {
            return i.id == item.id;
          });

          return {
            id: item.id,
            title: itemInApi.attributes.title,
            price: itemInApi.attributes.price,
            quantity: item.quantity,
            imageUrl: itemInApi?.attributes?.images?.data[0]?.attributes?.url,
          };
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const addItem = (id: number) => {
    const item = currentCart.find((i) => i.id == id);

    if (item) {
      item.quantity += 1;

      const index = currentCart.findIndex((i) => i.id == id);

      if (index != -1) {
        const newCart = [...currentCart];
        newCart[index] = item;

        setCurrentCart(newCart);
      }
    } else {
      const newItem: CartItem = {
        id: id,
        quantity: 1,
      };
      setCurrentCart([...currentCart, newItem]);
    }
  };

  const minusQuantity = (id: number) => {
    const item = currentCart.find((i) => i.id == id);

    if (item) {
      item.quantity -= 1;

      const index = currentCart.findIndex((i) => i.id == id);

      if (index != -1) {
        const newCart = [...currentCart];
        newCart[index] = item;

        setCurrentCart(newCart);
      }
    }
  };

  const deleteItem = (id: number) => {
    setCurrentCart(currentCart.filter((item) => item.id !== id));
  };

  const plusQuantity = (id: number) => {
    const item = currentCart.find((i) => i.id == id);

    if (item) {
      item.quantity += 1;

      const index = currentCart.findIndex((i) => i.id == id);

      if (index != -1) {
        const newCart = [...currentCart];
        newCart[index] = item;

        setCurrentCart(newCart);
      }
    }
  };

  const syncCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(currentCart));
  };

  return (
    <CartCountContext.Provider
      value={{
        currentCart: currentCart,
        addItem: addItem,
        minusQuantity: minusQuantity,
        deleteItem: deleteItem,
        plusQuantity: plusQuantity,
        getProductItems: getProductItems,
      }}
    >
      {children}
    </CartCountContext.Provider>
  );
};

export const useCartCount = () => {
  const context = useContext(CartCountContext);
  if (!context) {
    throw new Error("useCartCount must be used within a CartCountProvider");
  }
  return context;
};
