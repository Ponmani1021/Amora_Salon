import styles from './Gallery.module.css'
import g1 from '../../assets/images/gallery/galler1.avif'
import g2 from '../../assets/images/gallery/galler12.avif'
import g3 from '../../assets/images/gallery/gallery3.avif'
import g4 from '../../assets/images/gallery/gallery4.avif'
import g5 from '../../assets/images/gallery/gallery5.avif'
import g6 from '../../assets/images/gallery/gallery6.avif'
import g7 from '../../assets/images/gallery/gallery7.avif'
import g8 from '../../assets/images/gallery/gallery8.avif'
import g9 from '../../assets/images/gallery/gallery9.avif'
import g10 from '../../assets/images/gallery/gallery10.avif'
import g11 from '../../assets/images/gallery/gallery11.avif'
import g12 from '../../assets/images/gallery/galler12.avif'
import g13 from '../../assets/images/gallery/gallery13.avif'
import g14 from '../../assets/images/gallery/gallery14.avif'
import g15 from '../../assets/images/gallery/gallery15.avif'
import { Link } from "react-router-dom";


function Gallery(){
    return(
        <>
        <div className={styles.gallerySection}>
            <h1>Our gallery</h1>
            <div className={styles.galleryImageGrid}>
                <img src={g1} alt="" />
                <img src={g2} alt="" />
                <img src={g3} alt="" />
                <img src={g4} alt="" />
                <img src={g5} alt="" />
                <img src={g6} alt="" />
                <img src={g7} alt="" />
                <img src={g8} alt="" />
                <img src={g9} alt="" />
                <img src={g10} alt="" />
                <img src={g11} alt="" />
                <img src={g12} alt="" />
                <img src={g13} alt="" />
                <img src={g14} alt="" />
                <img src={g15} alt="" />


            </div>


            <div className={styles.galleryDetails}>
                <h1>“The service was amazing and my nails have never looked better. Highly recommend!” <br />– Emily R.</h1>
            </div>

            <div className={styles.galleryBooknow}>
                <h1>Ready for Flawless Nails?</h1>
                <p>Book your appointment today and enjoy the Amora experience.</p>
                <Link to="/products" className={`${styles.bookBtn} ${styles.btn}`}>Book Now</Link>

            </div>

        </div>
        </>
    )
}

export default Gallery