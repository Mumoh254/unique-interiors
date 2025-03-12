import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './layout/layout';
import LoadingSpinner from './pages/looder'; 
import ScrollToTop from './pages/scrollTop';

const Home = lazy(() => import('./pages/home'));
const Quote = lazy(() => import('./pages/quote'));
const Consultation = lazy(() => import('./pages/consoltation'));
const NotFound = lazy(() => import('./pages/404'));
const About = lazy(() => import('./pages/about'));
const FAQ = lazy(() => import('./pages/faq'));
const Contact = lazy(() => import('./pages/contact'));
const Projects = lazy(() => import('./pages/projects'));
const TermsOfService = lazy(() => import('./pages/terms'));
const CookiesPolicy = lazy(() => import('./pages/cookies'));
const ProcessComponent = lazy(() => import('./pages/process'));
const Team = lazy(() => import('./pages/team'));

function App() {

  useEffect(() => {
    const preloadRoutes = async () => {
      await Promise.all([
        import('./pages/home'),
        import('./pages/projects'),
        import('./pages/about'),
        import('./pages/contact'),  // Preload Contact page
   
      ]);
    };
    preloadRoutes();
  }, []);
  
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quote" element={<Quote />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="cookies" element={<CookiesPolicy />} />
          <Route path="process" element={<ProcessComponent />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="team" element={<Team />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;