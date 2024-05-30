import { Outlet } from 'react-router-dom';
import { Nav } from '../Nav';

const Layout: React.FC = () => {
  return (
    <>
      <header className="w-screen px-12 py-4 bg-dark">
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
