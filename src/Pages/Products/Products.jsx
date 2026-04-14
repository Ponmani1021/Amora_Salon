import { useState, useMemo } from 'react';
import styles from './Products.module.css';
import { useCart } from '../../context/CartContext';
import { useBooking } from '../../context/BookingContext';

import p1  from '../../assets/images/products/p1.avif';
import p2  from '../../assets/images/products/p2.avif';
import p3  from '../../assets/images/products/p3.avif';
import p4  from '../../assets/images/products/p4.avif';
import p5  from '../../assets/images/products/p5.avif';
import p6  from '../../assets/images/products/p6.avif';
import p7  from '../../assets/images/products/p7.avif';
import p8  from '../../assets/images/products/p8.avif';
import p9  from '../../assets/images/products/p9.avif';
import p10 from '../../assets/images/products/p10.avif';
import p11 from '../../assets/images/products/p11.avif';
import p12 from '../../assets/images/products/p12.avif';

// duration: null  → product (Add to Cart)
// duration: "Xmin" → session (Book Now)
const allProducts = [
  { id: 1,  img: p1,  name: 'Classic Cap',                price: 15.00, duration: null },
  { id: 2,  img: p2,  name: 'Vitamin C Brightening Kit',  price: 51.00,  duration: null },
  { id: 3,  img: p3,  name: 'Handmade Vase',     price: 25.00,  duration: null },
  { id: 4,  img: p4,  name: 'Hand Soap',           price: 10.00, duration: null },
  { id: 5,  img: p5,  name: 'Set of plates', price: 30.00, duration: null },
  { id: 6,  img: p6,  name: 'Sunglasses',       price: 45.00, duration: null },
  { id: 7,  img: p7,  name: 'Wooden Chair',        price: 132.00,  duration: null },
  { id: 8,  img: p8,  name: 'Wool Sweater',      price: 50.00, duration: null },
  { id: 9,  img: p9,  name: 'Creative course session',        price: 35.00, duration: '45 min' },
  { id: 10, img: p10, name: 'Group fitness class',              price: 15.00,  duration: '15 min' },
  { id: 11, img: p11, name: 'Individual coaching session',     price: 60.00, duration: '1 hr' },
  { id: 12, img: p12, name: 'Intro language tutoring session',           price: 0, duration: '45 min' },
];

function Products() {
  const [sortBy, setSortBy] = useState('default');
  const { addToCart } = useCart();
  const { openBooking } = useBooking();

  const sorted = useMemo(() => {
    const list = [...allProducts];
    if (sortBy === 'low-high')  list.sort((a, b) => a.price - b.price);
    if (sortBy === 'high-low')  list.sort((a, b) => b.price - a.price);
    return list;
  }, [sortBy]);

  return (
    <section className={styles.productsPage}>
        <h1>All Products</h1>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <p className={styles.count}>{allProducts.length} Products</p>
        <select
          className={styles.sortSelect}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="high-low">Price: High to Low</option>
          <option value="low-high">Price: Low to High</option>
        </select>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {sorted.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imgWrapper}>
              <img src={product.img} alt={product.name} loading="lazy" />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.productName}>{product.name}</h3>
              <div className={styles.meta}>
                <span className={styles.price}>${product.price}</span>
                {product.duration && (
                  <span className={styles.duration}>{product.duration}</span>
                )}
              </div>
              <button
                className={styles.actionBtn}
                onClick={() => product.duration ? openBooking(product) : addToCart(product)}
              >
                {product.duration ? 'Book Now' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
