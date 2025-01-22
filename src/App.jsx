
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import ProductPage from "./components/products/ProductPage";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Header from './components/Home/Header';
import Footer from './components/Footer/Footer';
import AllProductPage from './components/Allproductpage/AllProductPage';
import DiscoverProducts from './components/products/DiscoverProducts';

function App() {
 

  return (
    <Router>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<DiscoverProducts />} />
        <Route path="/product/:category" element={<AllProductPage />} />
          <Route path="/product/:category/:subcategory" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
