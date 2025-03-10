import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/layout';
import LoadingSpinner from './pages/looder'; 

// Lazy load pages
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

function App() {
  return (
    <BrowserRouter>
   
      <Suspense fallback={<LoadingSpinner />}> {/* Loader while loading routes */}
        <Routes>
          {/* Wrap all routes inside Layout */}
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
            <Route path="consultation" element={<Consultation />} />

            {/* Catch-all 404 page */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
  
    </BrowserRouter>
  );
}

export default App;
