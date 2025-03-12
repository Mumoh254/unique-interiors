import { memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';  // Preload header for faster rendering
import Footer from './footer';  // Preload footer for better UX
import LoadingSpinner from '../pages/looder'; // Lightweight fallback

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default memo(Layout); // Memoize to prevent unnecessary re-renders
