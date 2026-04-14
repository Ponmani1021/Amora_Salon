import { Link } from "react-router-dom";
import Footerstyles from './Footer.module.css'


function Footer() {
    return (
        <>
        <div className={Footerstyles.footer}>
             <div className={Footerstyles.footerGridWrapper}>
                <div className={Footerstyles.footerGridItem}>
                    <h1>Amora</h1>
                    <div className={Footerstyles.socialLinks}>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    </div>
                </div>
                <div className={Footerstyles.footerGridItem}>
                    <h3>Address</h3>
                    <p>3721 Single Street <br /> Quincy, MA 02169</p>
                </div>
                <div className={Footerstyles.footerGridItem}>
                    <h3>Contacts</h3>
                    <p>123-123-1234</p>
                    <p>info@amora.com</p>
                </div>
                <div className={Footerstyles.footerGridItem}>
                    <h3>Navigation</h3>
                    <Link to="/" className={Footerstyles.FnavLinks}>Home</Link>
                    <Link to="/about" className={Footerstyles.FnavLinks}>About</Link>
                    <Link to="/service" className={Footerstyles.FnavLinks}>Services</Link>
                    <Link to="/gallery" className={Footerstyles.FnavLinks}>Gallery</Link>
                    <Link to="/contact" className={Footerstyles.FnavLinks}>Contact</Link>
                </div>

             </div>
        </div>
        </>
    )
}

export default Footer