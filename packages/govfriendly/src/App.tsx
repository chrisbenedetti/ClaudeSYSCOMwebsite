import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main id="main-content" className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </HashRouter>
  );
}

export default App;
