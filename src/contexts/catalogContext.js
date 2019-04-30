import { createContext } from 'react';

const catalogContext = createContext([]);
export const CatalogProvider = catalogContext.Provider;
export const CatalogConsumer = catalogContext.Consumer;
