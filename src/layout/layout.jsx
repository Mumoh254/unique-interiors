import { memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { lazy } from 'react';
const Header = lazy(() => import('./header'));
const Footer = lazy(() => import('./footer'));
import LoadingSpinner from '../pages/looder'; // Lightweight fallback for Suspense

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <main>
        {/* Lazy load child components */}
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default memo(Layout); // Memoize to prevent unnecessary re-renders
