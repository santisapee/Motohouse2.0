import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/home/ItemListContainer";
import ProductsComponent from "./components/products/ProductsComponent";
import ContactComponent from "./components/contact/ContactComponent";
import NavBar from "./components/navigation/NavBar";
import CategoryComponent from "./components/categories/CategoryComponent";
import CarritoComponent from "./components/cart/Carrito";
import ProductDetail from "./components/product/ProductDetail";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomeComponent />} />
            <Route exact path="/products" element={<ProductsComponent />} />
            <Route exact path="/product/:categories" element={<ProductDetail />} />
            <Route
              exact
              path="/categories/:categories"
              element={<CategoryComponent />}
            />
            <Route exact path="/cart/" element={<CarritoComponent />} />
            <Route exact path="/contact" element={<ContactComponent />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
