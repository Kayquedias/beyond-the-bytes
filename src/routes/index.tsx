import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AddressPage } from '../pages/Address';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/address" element={<AddressPage />} />
        <Route path="/address/:id" />
        <Route path="*" element={<Navigate to={'/address'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
