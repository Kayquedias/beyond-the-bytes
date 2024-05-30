import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AddressPage } from '../pages/Address';
import { Layout } from '../components/layout/Layout';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/address" element={<AddressPage />} />
          <Route path="/address/:id" />
        </Route>
        <Route path="*" element={<Navigate to={'/address'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
