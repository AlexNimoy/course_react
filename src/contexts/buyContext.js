import { createContext } from 'react';

const buyContext = createContext({});
export const BuyProvider = buyContext.Provider;
export const BuyConsumer = buyContext.Consumer;
