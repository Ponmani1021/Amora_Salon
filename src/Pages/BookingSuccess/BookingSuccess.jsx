import { useLocation, useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import styles from './BookingSuccess.module.css';

function BookingSuccess() {
  const { state } = useLocation();
  const { bookingHistory } = useBooking();
  const navigate = useNavigate();

  // Use location state first (fresh navigation), fall back to latest in history
  const booking = state || bookingHistory[0];

  if (!booking) {
    navigate('/products');
    return null;
  }

  const { bookingId, sessionName, duration, price, sessionDate, sessionTime, createdAt } = booking;

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.iconCircle}>
          <i className="fa-solid fa-calendar-check"></i>
        </div>
        <h1 className={styles.title}>Booking Confirmed!</h1>
        <p className={styles.subtitle}>Your session has been booked. See you soon!</p>

        <div className={styles.meta}>
          <div className={styles.metaRow}>
            <span>Booking ID</span>
            <span className={styles.value}>{bookingId}</span>
          </div>
          <div className={styles.metaRow}>
            <span>Session</span>
            <span className={styles.value}>{sessionName}</span>
          </div>
          <div className={styles.metaRow}>
            <span>Duration</span>
            <span className={styles.value}>{duration}</span>
          </div>
          <div className={styles.metaRow}>
            <span>Price</span>
            <span className={styles.value}>₹{price}</span>
          </div>
          <div className={styles.metaRow}>
            <span>Date</span>
            <span className={styles.value}>{sessionDate}</span>
          </div>
          <div className={styles.metaRow}>
            <span>Time</span>
            <span className={styles.value}>{sessionTime}</span>
          </div>
          <div className={styles.metaRow}>
            <span>Booked On</span>
            <span className={styles.value}>{createdAt}</span>
          </div>
        </div>

        <button className={styles.continueBtn} onClick={() => navigate('/products')}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default BookingSuccess;
