import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import PlansPage from './pages/PlansPage';
import AboutUsPage from './pages/AboutUsPage';
import ShopPage from './pages/ShopPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from "./pages/Privacy";
import TermsOfService from "./pages/Terms";
import GymRules from "./pages/Rules";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/rules" element={<GymRules />} />
      </Routes>
    </Router>
  );
}

export default App;