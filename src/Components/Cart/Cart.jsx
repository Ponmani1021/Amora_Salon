import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';

function Cart() {
  const { cartItems, removeFromCart, updateQty, isCartOpen, setIsCartOpen, clearCart, addOrder } = useCart();
  const navigate = useNavigate();

  const grandTotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleConfirm = () => {
    const orderId  = 'ORD-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    const datetime = new Date().toLocaleString('en-IN', {
      dateStyle: 'medium', timeStyle: 'short'
    });
    const snapshot = [...cartItems];
    const order = { orderId, items: snapshot, total: grandTotal, datetime };
    addOrder(order);
    setIsCartOpen(false);
    clearCart();
    navigate('/order-success', { state: order });
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div className={styles.overlay} onClick={() => setIsCartOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`${styles.cartSidebar} ${isCartOpen ? styles.open : ''}`}>
        {/* Header */}
        <div className={styles.cartHeader}>
          <h2>Your Cart</h2>
          <button
            className={styles.closeBtn}
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className={styles.cartItems}>
          {cartItems.length === 0 ? (
            <p className={styles.empty}>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.img} alt={item.name} className={styles.itemImg} />
                <div className={styles.itemDetails}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemPrice}>₹{item.price}</p>
                  <div className={styles.qtyControls}>
                    <button onClick={() => updateQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                </div>
                <div className={styles.itemRight}>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <p className={styles.itemTotal}>₹{item.price * item.qty}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className={styles.cartFooter}>
            <div className={styles.grandTotal}>
              <span>Total</span>
              <span>₹{grandTotal}</span>
            </div>
            <button className={styles.confirmBtn} onClick={handleConfirm}>Confirm</button>
          </div>
        )}
      </aside>
    </>
  );
}

export default Cart;
