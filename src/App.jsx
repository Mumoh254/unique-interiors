import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Quote from './pages/quote';
import Consultation from './pages/consoltation';
import Layout from './layout/layout';
import NotFound from './pages/404';
import  About from  './pages/about'
import  FAQ from  './pages/faq'
import  Contact from  './pages/contact'
import Projects from './pages/projects';
import  TermsOfService   from  './pages/terms'
import CookiesPolicy from './pages/cookies';
// import    ProcessComponent    from  './pages/process'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quote" element={<Quote />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="cookies" element={<CookiesPolicy />} />
          {/* <Route path="process" element={<ProcessComponent />} /> */}
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="consultation" element={<Consultation />} />
          {/* Catch-all route for 404 pages */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
