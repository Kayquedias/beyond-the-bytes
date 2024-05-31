import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { AppRouter } from './routes';
import { initLocalStorage } from './data/api';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  useEffect(() => {
    initLocalStorage();
  }, []);

  return (
    <>
      <ToastContainer />
      <AppRouter />;
    </>
  );
};

export default App;
