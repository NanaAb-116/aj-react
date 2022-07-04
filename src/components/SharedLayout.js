import { Outlet } from 'react-router-dom';
import NavbarComp from './NavbarComp';
import Footer from './Footer';

const SharedLayout = () => {
  return (
    <>
      <NavbarComp />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
