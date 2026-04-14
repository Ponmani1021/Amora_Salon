import { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { useNavigate } from 'react-router-dom';
import styles from './Booking.module.css';

// ── helpers ──────────────────────────────────────────────────────────────────

const ADDRESS = '24, Blossom Lane, Koramangala, Bengaluru – 560034';

const DAYS   = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];

/** Generate 45-min slots 10:00–18:45, skip 13:00–14:15 lunch */
function generateSlots() {
  const slots = [];
  let h = 10, m = 0;
  const end = { h: 18, m: 45 };

  while (h < end.h || (h === end.h && m <= end.m)) {
    const lunchStart = h === 13 && m >= 0;
    const lunchEnd   = h === 14 && m < 15;
    const isLunch    = lunchStart || lunchEnd || (h === 13);

    if (!isLunch) {
      const hh  = String(h).padStart(2, '0');
      const mm  = String(m).padStart(2, '0');
      const ampm = h < 12 ? 'AM' : 'PM';
      const h12  = h > 12 ? h - 12 : h === 0 ? 12 : h;
      slots.push(`${String(h12).padStart(2,'0')}:${mm} ${ampm}`);
    }

    m += 45;
    if (m >= 60) { h += 1; m -= 60; }
  }
  return slots;
}

const TIME_SLOTS = generateSlots();

/** Build calendar grid for a given month/year */
function buildCalendar(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

function isPast(year, month, day) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(year, month, day) < today;
}

// ── component ─────────────────────────────────────────────────────────────────

function Booking() {
  const { bookingProduct, closeBooking, addBooking } = useBooking();
  const navigate = useNavigate();

  const today = new Date();
  const [calYear,  setCalYear]  = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [selDate,  setSelDate]  = useState(null);   // { year, month, day }
  const [selTime,  setSelTime]  = useState(null);

  const isOpen = !!bookingProduct;

  const prevMonth = () => {
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
    else setCalMonth(m => m - 1);
    setSelDate(null); setSelTime(null);
  };

  const nextMonth = () => {
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
    else setCalMonth(m => m + 1);
    setSelDate(null); setSelTime(null);
  };

  const handleDayClick = (day) => {
    if (!day) return;
    const dow = new Date(calYear, calMonth, day).getDay();
    if (dow === 0 || dow === 6) return;       // weekend
    if (isPast(calYear, calMonth, day)) return;
    setSelDate({ year: calYear, month: calMonth, day });
    setSelTime(null);
  };

  const cells = buildCalendar(calYear, calMonth);

  const formatSelDate = () => {
    if (!selDate) return '';
    return `${selDate.day} ${MONTHS[selDate.month]} ${selDate.year}`;
  };

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={closeBooking} />}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        {/* Close */}
        <button className={styles.closeBtn} onClick={closeBooking} aria-label="Close">✕</button>

        <div className={styles.columns}>

          {/* ── Col 1: Product info ── */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Service Details</h3>
            {bookingProduct && (
              <>
                <img src={bookingProduct.img} alt={bookingProduct.name} className={styles.productImg} />
                <p className={styles.productName}>{bookingProduct.name}</p>
                <span className={styles.durationBadge}>{bookingProduct.duration}</span>
                <div className={styles.addressBox}>
                  <i className="fa-solid fa-location-dot"></i>
                  <p>{ADDRESS}</p>
                </div>
              </>
            )}
          </div>

          {/* ── Col 2: Calendar ── */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Select Date</h3>
            <div className={styles.calendar}>
              {/* Month nav */}
              <div className={styles.calNav}>
                <button onClick={prevMonth} aria-label="Previous month">‹</button>
                <span>{MONTHS[calMonth]} {calYear}</span>
                <button onClick={nextMonth} aria-label="Next month">›</button>
              </div>

              {/* Day headers */}
              <div className={styles.calGrid}>
                {DAYS.map(d => (
                  <div key={d} className={styles.dayHeader}>{d}</div>
                ))}

                {/* Cells */}
                {cells.map((day, idx) => {
                  if (!day) return <div key={`e-${idx}`} />;
                  const dow     = new Date(calYear, calMonth, day).getDay();
                  const weekend = dow === 0 || dow === 6;
                  const past    = isPast(calYear, calMonth, day);
                  const active  = selDate?.day === day && selDate?.month === calMonth && selDate?.year === calYear;

                  return (
                    <button
                      key={day}
                      className={`${styles.dayCell}
                        ${weekend || past ? styles.disabled : ''}
                        ${active ? styles.selected : ''}
                      `}
                      onClick={() => handleDayClick(day)}
                      disabled={weekend || past}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Col 3: Time slots ── */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Select Time</h3>
            {selDate ? (
              <>
                <p className={styles.selectedDate}>{formatSelDate()}</p>
                <div className={styles.slots}>
                  {TIME_SLOTS.map(slot => (
                    <button
                      key={slot}
                      className={`${styles.slot} ${selTime === slot ? styles.slotActive : ''}`}
                      onClick={() => setSelTime(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {selTime && (
                  <button
                    className={styles.confirmBtn}
                    onClick={() => {
                      const bookingId = 'BKG-' + Math.random().toString(36).substring(2, 9).toUpperCase();
                      const createdAt = new Date().toLocaleString('en-IN', {
                        dateStyle: 'medium', timeStyle: 'short'
                      });
                      const sessionDate = `${selDate.day} ${MONTHS[selDate.month]} ${selDate.year}`;
                      const booking = {
                        bookingId,
                        sessionName: bookingProduct.name,
                        duration: bookingProduct.duration,
                        price: bookingProduct.price,
                        sessionDate,
                        sessionTime: selTime,
                        createdAt,
                      };
                      addBooking(booking);
                      closeBooking();
                      navigate('/booking-success', { state: booking });
                    }}
                  >
                    Confirm Booking
                  </button>
                )}
              </>
            ) : (
              <p className={styles.hint}>Pick a date to see available slots.</p>
            )}
          </div>

        </div>
      </aside>
    </>
  );
}

export default Booking;
