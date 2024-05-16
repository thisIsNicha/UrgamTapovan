import { Outlet } from "react-router-dom";
// import Navbar from '../components/Navbar/Navbar';
// import Banner from '../components/Banner/Banner';
// import Footer from '../components/Footer/Footer';

import NavigationBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function Root(): JSX.Element {
  return (
    <div style={{ width: '100vw' }}>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );

}

export default Root;
