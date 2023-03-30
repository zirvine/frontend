import { Outlet } from 'react-router-dom';
import Navigation from '../Nav';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
