import React, { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import { ProductProvider } from './product.context';

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ProductProvider>
      <ToastContainer />
      {children}
    </ProductProvider>
  );
};
