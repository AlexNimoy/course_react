import { createContext } from 'react';

const cartContext = createContext([]);
export const CartProvider = cartContext.Provider;
export const CartConsumer = cartContext.Consumer;
