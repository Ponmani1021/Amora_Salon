import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import './App.css'
import Home from './Pages/Home/Home'
import Footer from "./Components/Footer";
import About from "./Pages/About/About";
import Service from "./Pages/Service/Service";
import Gallery from "./Pages/Gallery/Gallery";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import Cart from "./Components/Cart/Cart";
import Booking from "./Components/Booking/Booking";
import OrderSuccess from "./Pages/OrderSuccess/OrderSuccess";
import BookingSuccess from "./Pages/BookingSuccess/BookingSuccess";
import { CartProvider } from "./context/CartContext";
import { BookingProvider } from "./context/BookingContext";

function App() {
  return (
    <CartProvider>
      <BookingProvider>
        <Navbar />
        <Cart />
        <Booking />
        <main>
          <Routes>
            <Route path="/"                element={<Home />} />
            <Route path="/about"           element={<About />} />
            <Route path="/service"         element={<Service />} />
            <Route path="/gallery"         element={<Gallery />} />
            <Route path="/contact"         element={<Contact />} />
            <Route path="/products"        element={<Products />} />
            <Route path="/order-success"   element={<OrderSuccess />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
          </Routes>
        </main>
        <Footer />
      </BookingProvider>
    </CartProvider>
  );
}

export default App;
