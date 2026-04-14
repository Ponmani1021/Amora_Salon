import styles from './About.module.css'
import storyimg from '../../assets/images/aboutimg.avif'
import storyimg2 from '../../assets/images/aboutimg2.avif'
import team1 from '../../assets/images/team1.avif'
import team2 from '../../assets/images/team2.avif'
import team3 from '../../assets/images/team3.avif'
import team4 from '../../assets/images/team4.avif'
import { Link } from "react-router-dom";


function About(){
    return(
        <>
        <div className={styles.aboutSection}>
            <div className={styles.aboutHeroText}>
                <h1 className={styles.heading}>About us</h1>
                <p>At Amora, we’ve built more than a nail salon — we’ve built a space where beauty, comfort, and care come together. From the very beginning, our mission has been simple: to help every client feel confident, elegant, and at ease.</p>
            </div>
            <div className={styles.aboutGridWrapper}>
                <div className={styles.aboutGridItems}>
                    <i class="fa-regular fa-calendar"></i>
                    <h1>Founded 2018</h1>
                    <p>7 years of excellence</p>
                </div>
                <div className={styles.aboutGridItems}>
                    <i class="fa-solid fa-user-group"></i>
                    <h1>Expert Team</h1>
                    <p>Licensed nail technicians</p>
                </div>
                <div className={styles.aboutGridItems}>
                    <i class="fa-solid fa-cannabis"></i>
                    <h1>Hygiene First</h1>
                    <p>Sterilized tools, safe practices</p>
                </div>
                <div className={styles.aboutGridItems}>
                    <i class="fa-regular fa-heart"></i>
                    <h1>Relaxing Experience</h1>
                    <p>Your comfort is our priority</p>
                </div>
                <div className={styles.aboutGridItems}>
                    <i class="fa-solid fa-trophy"></i>
                    <h1>Premium Products</h1>
                    <p>Top-quality brands only</p>
                </div>
                <div className={styles.aboutGridItems}>
                    <i class="fa-regular fa-star"></i>
                    <h1>1000+ Clients</h1>
                    <p>Trusted by the community</p>
                </div>
            </div>


            {/* our story */}

            <div className={styles.aboutStorySection}>
                <div className={styles.aboutStoryText}>
                    <h1 className={styles.heading}>Our Story</h1>
                    <p>Founded with a passion for artistry and detail, Amora was created as a salon where nails are treated not just as style, but as a form of self-expression. We believe that small details — a flawless manicure, a soothing pedicure, a calming spa ritual — can make a big difference in how you feel every day.</p>
                </div>
                <div className={styles.aboutStoryImage}>
                    <img src={storyimg} alt="Our Story" />
                </div>
            </div>


            <div className={styles.aboutStorySection}>
                <div className={styles.aboutStoryText}>
                    <h1 className={styles.heading}>Our Philosophy</h1>
                    <p>At Amora, we believe beauty should feel effortless, natural, and kind to your well-being. That’s why we focus on treatments that not only enhance your look but also care for your hands and feet. Our philosophy is simple: when you take time for yourself, confidence follows — and we’re here to make that time special.</p>
                </div>
                <div className={styles.aboutStoryImage}>
                    <img src={storyimg2} alt="Our Philosophy" />
                </div>
            </div>

            {/* Our team */}
            <div className={styles.aboutStorySection}>
                <div className={styles.aboutStoryText}>
                    <h1 className={styles.heading}>Our Team</h1>
                    <p>Skilled, creative, and passionate — our technicians bring expertise and care to every service. At Amora, you’re in the hands of professionals who love what they do.</p>
                </div>
                <div className={styles.aboutTeamImage}>
                    <div className={styles.teamImage}>
                        <img src={team1} alt="kate" />
                        <h2>Kate</h2>
                    </div>
                    <div className={styles.teamImage}>
                        <img src={team2} alt="anna" />
                        <h2>Anna</h2>
                    </div>
                    <div className={styles.teamImage}>
                        <img src={team3} alt="lisa" />
                        <h2>Lisa</h2>
                    </div>
                    <div className={styles.teamImage}>
                        <img src={team4} alt="alex" />
                        <h2>Alex</h2>
                    </div>
                </div>
            </div>




            {/* Details */}

            <div className={styles.aboutDetails}>
                <h1>“Lovely atmosphere and flawless results. Amora is my new favorite salon.” <br /> – Sarah K.</h1>
            </div>


            <div className={styles.aboutBooknow}>
                <h1>Ready for Flawless Nails?</h1>
                <p>Book your appointment today and enjoy the Amora experience.</p>
                <Link to="/products" className={`${styles.bookBtn} ${styles.btn}`}>Book Now</Link>

            </div>



        </div>
        </>
    )
}

export default About