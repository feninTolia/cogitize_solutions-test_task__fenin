'use client';
import store from '@/store';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

persistStore(store); // persist the store

const Providers = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
