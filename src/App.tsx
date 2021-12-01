import * as React from 'react';

import { Routes } from 'navigation';

import { AuthProvider } from './context/AuthContext';

export function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
