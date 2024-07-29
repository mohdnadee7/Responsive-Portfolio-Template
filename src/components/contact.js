import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeOpen, faLink, faLocationDot} from '@fortawesome/free-solid-svg-icons';
function Contact() {
    return (
        <div className='pt-5' id='contact-section'>
            <div className="row freelancing-section">
                <div className='overlay-background'>
                    <h1 style={{ marginTop: "150px" }}>I'm <span style={{ color: "#f8b90a", background: "none" }}>Available </span> for freelancing</h1>
                    <p>I'm open for freelance opportunities and ready to bring your projects to life. With expertise in API development, web app development, and web design, I offer high-quality solutions tailored to your needs. Let's collaborate to achieve your goals!</p>
                </div>

            </div>
            <div classname="row">
                <h1 className='heading'>Contact Me</h1>
                <p className='text-center' style={{ color: "silver", padding: "0px 20px" }}>I'm here to help with your projects and answer any questions you might have. Feel free to reach out to discuss your requirements or get a quote. Let's connect and make your ideas a reality.</p>
            </div>
            <div className='row'>
                <div className="col-sm-3 contact-box"> <FontAwesomeIcon icon={faLocationDot} className=" contact-icon" /><p> ADDRESS</p><p>Alinagarh Azmatgarh 276124 , Azamgarh </p></div>
                <div className="col-sm-3 contact-box"> <FontAwesomeIcon icon={faPhone} className=" contact-icon" /><p> CONTACT NUMBER</p><p>
                <a href="tel:+918924957027"className='text-light text-decoration-none'>+91-8924957027</a></p></div>
                <div className="col-sm-3 contact-box"> <FontAwesomeIcon icon={faEnvelopeOpen} className="contact-icon" /><p> EMAIL ADDRESS</p><p>
                <a href="mailto:mohammadnadeem9825@gmail.com" target="_blank" className='text-light text-decoration-none'>mohammadnadeem9825@gmail.com</a></p></div>
                <div className="col-sm-3 contact-box"> <FontAwesomeIcon icon={faLink} className="contact-icon" /><p> WEBSITE</p><p>
                    <a href="https://trend-keys.vercel.app/" target="_blank"className='text-light text-decoration-none'>www.trending-key.com </a></p></div>
            </div>
        </div>

    );
}
export default Contact;