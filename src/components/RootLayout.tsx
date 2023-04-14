import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Template from './Templates/Template';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Template/>
    </>
  );
};

export default RootLayout;
