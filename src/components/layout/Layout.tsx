import { Outlet } from 'react-router-dom';
import { Nav } from '../Nav';

const Layout: React.FC = () => {
  return (
    <>
      <header className="fixed w-screen px-12 py-4 bg-dark">
        <Nav />
      </header>
      <main className="h-screen grid place-items-center">
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
