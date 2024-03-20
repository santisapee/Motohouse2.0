import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/home/ItemListContainer';
import ProductsComponent from './components/products/ProductsComponent';
import ContactComponent from './components/contact/ContactComponent';
import NavBar from './components/navigation/NavBar';
import SingleProduct from './components/product/SingleProduct';
import CategoryComponent from './components/categories/CategoryComponent';


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomeComponent />} />
          <Route exact path="/products" element={<ProductsComponent />} />
          <Route exact path="/product/:prodId" element={<SingleProduct />} />
          <Route exact ath="/categories" element={<CategoryComponent />} />
          <Route exact path="/contact" element={<ContactComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
