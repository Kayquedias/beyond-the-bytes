import { Outlet } from 'react-router-dom';
import { Nav } from '../Nav';

const Layout: React.FC = () => {
  return (
    <>
      <header className="fixed w-screen z-10 px-12 py-4 bg-dark">
        <Nav />
      </header>
      <main className="h-screen grid place-items-center w-screen">
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
