'use client';
import store, { persistor } from '@/store';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

persistStore(store); // persist the store

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
};

export default Providers;
