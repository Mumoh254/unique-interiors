import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Quote from './pages/quote';
import Consultation from './pages/consoltation';
import Layout from './layout/layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quote" element={<Quote />} />
          <Route path="consultation" element={<Consultation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
