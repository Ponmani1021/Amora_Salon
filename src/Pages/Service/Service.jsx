import styles from './Service.module.css'
import manicure from '../../assets/images/manicure.webp'
import pedicure from '../../assets/images/pedicure.webp'
import spa from '../../assets/images/spa1.webp'
import { Link } from "react-router-dom";


function Service(){
    return (
        <>
        <div className={styles.serviceSection}>
            <h1>Our Services</h1>

            <div className={styles.serviceContainer}>
                <h1>Manicure</h1>
                <div className={styles.servicePart}>
                    <div className={styles.servicePartItem}>
                        <h3>Classic Manicure</h3>
                        <p>$24</p>
                    </div>
                    <div className={styles.servicePartItem}>
                        <h3>French Manicure</h3>
                        <p>$50</p>
                    </div>
                    <div className={styles.servicePartItem}>
                        <h3>Gel Manicure</h3>
                        <p>$45</p>
                    </div>
                    <div className={styles.servicePartItem}>
                        <h3>Nail Art Add-On</h3>
                        <p>$5+</p>
                    </div>

                </div>

                <div className={styles.serviceImage}>
                    <img src={manicure} alt="Manicure" />
                </div>

            </div>


            <div className={styles.serviceContainer}>
                <h1>Pedicure</h1>
                <div className={styles.servicePart}>
                    <div className={styles.servicePartItem}>
                        <h3>Classic Pedicure</h3>
                        <p>$24</p>
                    </div>
                    <div className={styles.servicePartItem}>
                        <h3>Spa Pedicure</h3>
                        <p>$55</p>
                    </div>
                    <div className={styles.servicePartItem}>
                        <h3>Gel Pedicure</h3>
                        <p>$60</p>
                    </div>
                    <div className={styles.servicePartItem}>
                        <h3>French Pedicure</h3>
                        <p>$65</p>
                    </div>

                </div>
                <div className={styles.serviceImage}>
                    <img src={pedicure} alt="Manicure" />
                </div>
            </div>


            {/* Spa Treatments */}
            <div className={styles.serviceContainer}>
                <h1>Spa Treatments</h1>
                <div className={styles.servicePart}>
                    <div className={styles.servicePartItem}>
                        <h3>Wax Treatment</h3>
                        <p>$25</p>
                    </div>
                    <div className={styles.servicePartItem}>
                        <h3>Exfoliating Scrub</h3>
                        <p>$20</p>
                    </div>
                    <div className={styles.servicePartItem}>
                        <h3>Anti-Aging Ritual</h3>
                        <p>$35</p>
                    </div>
                    <div className={styles.servicePartItem}>
                        <h3>Lux Spa Package</h3>
                        <p>$90</p>
                    </div>

                </div>
                <div className={styles.serviceImage}>
                    <img src={spa} alt="Manicure" />
                </div>
            </div>


            <div className={styles.serviceDetails}>
                <h1>“The service was amazing and my nails have never looked better. Highly recommend!” – Emily R.</h1>
            </div>

            <div className={styles.serviceBooknow}>
                <h1>Ready for Flawless Nails?</h1>
                <p>Book your appointment today and enjoy the Amora experience.</p>
                <Link to="/products" className={`${styles.bookBtn} ${styles.btn}`}>Book Now</Link>

            </div>

        </div>
        </>
    )
}


export default Service