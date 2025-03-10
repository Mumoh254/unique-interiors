import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <main>
        <Outlet /> {/* Renders the current route's component */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
