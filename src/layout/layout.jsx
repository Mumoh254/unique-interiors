import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders the current route's component */}
      <Footer />
    </>
  );
}

export default Layout;
