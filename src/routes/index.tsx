import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/address" />
        <Route path="/address/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
