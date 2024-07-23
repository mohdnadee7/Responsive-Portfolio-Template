import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faCode,faHome } from '@fortawesome/free-solid-svg-icons';

function Service() {
    return (
    <div className='service-section pt-5'>
        <div classname="row">
            <div className='resume-heading'>Services</div>
            <p className='text-center' style={{ color: "silver", padding: "0px 20px" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </div>
        <div className="row service-container">
        <div className="col service-box"> <FontAwesomeIcon icon={faCode} className="custom-icon" /><br/> WEB DESIGN</div>
        <div className="col service-box"><FontAwesomeIcon icon={faCode} className="custom-icon" /><br/> WEB DEVELOPING</div>
        <div className="col service-box"> <FontAwesomeIcon icon={faCode} className="custom-icon" /><br/> API DEVELOPER</div>
        </div>
        
    </div>);
}
export default Service;