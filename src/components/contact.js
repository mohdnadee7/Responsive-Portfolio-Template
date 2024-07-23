import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faContactCard, faVoicemail, faGlobe } from '@fortawesome/free-solid-svg-icons';
function Contact() {
    return (
        <div className='contact-section pt-5'>
            <div className="row freelancing-section">
                <div className='overlay-background'>
                    <h1 style={{ marginTop: "150px" }}>I'm <span style={{ color: "#f8b90a", background: "none" }}>Available </span> for freelancing</h1>
                    <p>A small river named Duden flows by their place and supplies it with <br />the necessary regelialia.</p>
                </div>

            </div>
            <div classname="row">
                <h1 className='heading'>Contact Me</h1>
                <p className='text-center' style={{ color: "silver", padding: "0px 20px" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. <br />It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
            <div className='row'>
                <div className="col-sm-3 contact-box"> <FontAwesomeIcon icon={faAddressCard} className=" contact-icon" /><p> ADDRESS</p><p>198 West 21th Street, Suite 721 New York NY 10016</p></div>
                <div className="col-sm-3 contact-box"> <FontAwesomeIcon icon={faContactCard} className=" contact-icon" /><p> CONTACT NUMBER</p><p>+91-8924957027</p></div>
                <div className="col-sm-3 contact-box"> <FontAwesomeIcon icon={faVoicemail} className="contact-icon" /><p> EMAIL ADDRESS</p><p>nadeem@gmail.com</p></div>
                <div className="col-sm-3 contact-box"> <FontAwesomeIcon icon={faGlobe} className="contact-icon" /><p> WEBSITE</p><p>www.mywebsite.com</p></div>
            </div>
        </div>

    );
}
export default Contact;