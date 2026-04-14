import styles from './Contact.module.css'
import contactimg from '../../assets/images/contact.avif'
import { Link } from "react-router-dom";


function Contact(){
    return(
        <>
        <div className={styles.contactSection}>
            <h1>Contact us</h1>

            {/* form */}
            <div className={styles.contactFormSection}>
                <form action="" className={styles.contactForm}>
                    <div className={styles.contactFormItem}>
                        <label htmlFor="name">Name*</label>
                        <input type="text" name="name" id="name" required placeholder='Your name'/>
                    </div>
                    <div className={styles.contactFormItem}>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" name="lname" id="lname" placeholder='Your last name'/>
                    </div>
                    <div className={styles.contactFormItem}>
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" id="email" required placeholder='Your email id'/>
                    </div>
                    <div className={styles.contactFormItem}>
                        <label htmlFor="msg">Message*</label>
                        <textarea name="msg" id="msg" rows={3} placeholder='Enter your message'></textarea>
                    </div>
                </form>
                <button className={styles.btn} type='submit'>Submit</button>

            </div>



            {/* contact details */}
            <div className={styles.contactDetailsGrid}>
                <div className={styles.contactDetail}>
                    <h1>Contact</h1>
                    <p>info@amora.com</p>
                    <p>123-456-7890</p>
                </div>

                <div className={styles.contactDetail}>
                    <h1>Address</h1>
                    <p>3721 Single Street <br />
                    Quincy, MA 02169</p>
                </div>

                <div className={styles.contactDetail}>
                    <h1>Opening hours</h1>
                    <p>Monday - Friday: 8:00 - 20:00</p>
                    <p>Saturday: 9:00 - 15:00</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>


            {/* location */}

            <div className={styles.contactLocation}>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36602.93365773897!2d77.3361526860185!3d11.13860468676278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1776059438152!5m2!1sen!2sin"
            width="600"
            height="100% "
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />                
            <img src={contactimg} alt="Contact" />
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


export default Contact