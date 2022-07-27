import { Outlet } from 'react-router-dom';
import NavbarComp from './NavbarComp';
import Footer from './Footer';

const SharedLayout = ({ open, setOpen }) => {
  return (
    <>
      <NavbarComp open={open} setOpen={setOpen} />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
