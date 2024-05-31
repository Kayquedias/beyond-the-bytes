import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AddressPage } from '../pages/Address';
import { Layout } from '../components/layout/Layout';
import { FormAddress } from '../pages/Address/FormAddress';
import { EditAddress } from '../pages/Address/EditAddress';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="address" element={<AddressPage />}>
            <Route path="register" element={<FormAddress />} />
          </Route>
          <Route path="/address/:id" element={<EditAddress />} />
        </Route>
        <Route path="*" element={<Navigate to={'/address'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
