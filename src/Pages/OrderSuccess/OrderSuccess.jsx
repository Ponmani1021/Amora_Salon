import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './OrderSuccess.module.css';

function OrderSuccess() {
  const { state } = useLocation();
  const { orderHistory } = useCart();
  const navigate = useNavigate();

  // Use location state first (fresh navigation), fall back to latest in history
  const order = state || orderHistory[0];

  if (!order) {
    navigate('/products');
    return null;
  }

  const { orderId, items, total, datetime } = order;

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.iconCircle}>
          <i className="fa-solid fa-check"></i>
        </div>
        <h1 className={styles.title}>Order Placed Successfully!</h1>
        <p className={styles.subtitle}>Thank you for your purchase. Here's your summary.</p>

        <div className={styles.meta}>
          <div className={styles.metaRow}>
            <span>Order ID</span>
            <span className={styles.value}>{orderId}</span>
          </div>
          <div className={styles.metaRow}>
            <span>Date & Time</span>
            <span className={styles.value}>{datetime}</span>
          </div>
        </div>

        <div className={styles.itemsList}>
          <h3>Items Ordered</h3>
          {items.map((item) => (
            <div key={item.id} className={styles.item}>
              <img src={item.img} alt={item.name} />
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>{item.name}</p>
                <p className={styles.itemQty}>Qty: {item.qty}</p>
              </div>
              <p className={styles.itemTotal}>₹{item.price * item.qty}</p>
            </div>
          ))}
        </div>

        <div className={styles.totalRow}>
          <span>Total Amount</span>
          <span className={styles.totalAmt}>₹{total}</span>
        </div>

        <button className={styles.continueBtn} onClick={() => navigate('/products')}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;
