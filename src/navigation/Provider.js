import React from 'react';
import { AuthProvider } from './AuthProvider';
import FlashMessage from "react-native-flash-message";
import { Routes } from './Routes';
import { Provider as ReduxProvider } from 'react-redux'
import store from '../store';

export const Provider = () => {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <Routes />
        <FlashMessage position="bottom" />
      </AuthProvider>
    </ReduxProvider>
  );
};
