import { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookingProduct, setBookingProduct] = useState(null);
  const [bookingHistory, setBookingHistory] = useState([]);

  const openBooking  = (product) => setBookingProduct(product);
  const closeBooking = () => setBookingProduct(null);
  const addBooking   = (booking) => setBookingHistory((prev) => [booking, ...prev]);

  return (
    <BookingContext.Provider value={{ bookingProduct, openBooking, closeBooking, bookingHistory, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);
