import styles from './Home.module.css'
import homeimg1 from '../../assets/images/homeimg1.avif'
import homeimg2 from '../../assets/images/homemobile1.avif'
import aboutimg1 from '../../assets/images/homeimg2.avif'
import aboutimg2 from '../../assets/images/homeaboutmobile1.avif'
import serviceimg1 from '../../assets/images/homeservice1.avif'
import serviceimg2 from '../../assets/images/homeservice2.avif'
import serviceimg3 from '../../assets/images/homeservice3.avif'
import { Link } from "react-router-dom";



function Home(){
    return (
        <>
        <div className={styles.homeWrapper}>
            {/* ===========HERO========== */}
            <div className={styles.heroSection}>
                <div className={styles.heroText}>
                    <h1>Get your nails done</h1>
                    <p>With an extensive care.</p>
                <Link to="/products" className={`${styles.bookBtn} ${styles.btn}`}>Book Now</Link>
                </div>
                <div className={styles.imageSection}>
                    <picture>
                        <source media="(max-width: 900px)" srcSet={homeimg2} />
                        <img src={homeimg1} alt="Nails" />
                    </picture>
                </div>
            </div>

            <div className={styles.detailsSection}>
                <h1>“At Amora, you are your own muse.”</h1>
            </div>


            {/* ==============ABOUT=========== */}
            <div className={styles.aboutSection}>
                <h1>About us</h1>
                <div className={styles.aboutWrapper}>
                    <div className={styles.aboutGridWrapper}>
                        <div className={styles.aboutGridItem}>
                            <h1>Crafted with Care</h1>
                            <p>At Amora, every detail matters. We combine precision, creativity, and gentle care to make your nails look flawless and feel healthy.</p>
                        </div>
                        <div className={styles.aboutGridItem}>
                            <h1>A Place to Relax</h1>
                            <p>Our salon is more than beauty — it’s a space to unwind. From the first polish to the final touch, we make every visit calming and enjoyable.</p>
                        </div>
                    </div>
                    <div className={styles.imageSection}>
                        <picture>
                            <source media="(max-width: 900px)" srcSet={aboutimg2} />
                            <img src={aboutimg1} alt="Nails" />
                        </picture>
                    </div>
                    <Link to="/products" className={`${styles.bookBtn} ${styles.btn}`}>Book Now</Link>

                </div>
            </div>


            {/* ===============SERVICE========= */}
            <div className={styles.serviceSection}>
                <h1>Our Services</h1>
                <p>At Amora, we offer manicures, pedicures, and spa treatments with <br /> expert care and premium products for lasting beauty.</p>
                <div className={styles.serviceGridWrapper}>
                    <div className={styles.serviceGriditem}>
                        <div className={styles.servicesImage}>
                            <img src={serviceimg1} alt="Pedicure" />
                        </div>
                        <h2>Pedicure</h2>
                    </div>
                    <div className={styles.serviceGriditem}>
                        <div className={styles.servicesImage}>
                            <img src={serviceimg2} alt="Manicure" />
                        </div>
                        <h2>Manicure</h2>
                    </div>
                    <div className={styles.serviceGriditem}>
                        <div className={styles.servicesImage}>
                            <img src={serviceimg3} alt="Spa Treatment" />
                        </div>
                        <h2>Spa Treatment</h2>
                    </div>
                </div>
                <Link to="/service" className={styles.btn}>Explore All Services</Link>
            </div>

            <div className={styles.detailsSection}>
                <h1>“Lovely atmosphere and flawless results. Amora is my new favorite salon.” <br /> – Sarah K.</h1>
            </div>


            {/* =============QUESTIONS========== */}

            <div className={styles.qusetionsSection}>
                <div className={styles.questionsText}>
                    <h1>Ready for Flawless Nails?</h1>
                    <p>Book your appointment today and enjoy the Amora experience.</p>
                <Link to="/products" className={`${styles.bookBtn} ${styles.btn}`}>Book Now</Link>
                </div>


                <div className={styles.questionsContainer}>
                    <h1>Frequently asked questions</h1>
                    <div className={styles.questionsGridwrapper}>
                        <div className={styles.questionsGridItems}>
                            <h2>Do you accept walk-ins?</h2>
                            <p>Yes, we welcome walk-ins when availability allows. To guarantee your spot, we recommend booking in advance.</p>
                        </div>
                        <div className={styles.questionsGridItems}>
                            <h2>How can I reschedule?</h2>
                            <p>You can reschedule easily by contacting us via phone or email. We’ll help you find the next available time.</p>
                        </div>
                        <div className={styles.questionsGridItems}>
                            <h2>How long does a manicure last?</h2>
                            <p>On average, a manicure lasts 7–10 days, while gel manicures can stay flawless for up to 2–3 weeks.</p>
                        </div>
                        <div className={styles.questionsGridItems}>
                            <h2>What is the cancellation policy?</h2>
                            <p>You can cancel your appointment without charge if you notify us at least 24 hours in advance.</p>
                        </div>
                    </div>

                </div>

            </div>



        </div>
        </>
    )
}

export default Home