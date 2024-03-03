import React from 'react';
import { Outlet } from "react-router-dom";
// import Navbar from '../components/Navbar/Navbar';
// import Banner from '../components/Banner/Banner';
// import Footer from '../components/Footer/Footer';

import NavigationBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function Root(): JSX.Element {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
