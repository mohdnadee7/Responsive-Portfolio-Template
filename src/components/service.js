import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode ,faGears} from '@fortawesome/free-solid-svg-icons';

function Service() {
    return (
        <div className='py-5'id='service-section'>
            <div classname="row">
                <h1 className='heading'>Services</h1>
                <p className='text-center' style={{ color: "silver", padding: "0px 20px" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
            <div className="row service-container justify-content-evenly p-3">
                <div className="col-sm-3 service-box"> <FontAwesomeIcon icon={faLaptopCode} className="custom-icon" /><br /> WEB DESIGN</div>
                <div className="col-sm-3 service-box"> <FontAwesomeIcon icon={faCode} className="custom-icon" /><br /> WEB DEVELOPING</div>
                <div className="col-sm-3 service-box"> <FontAwesomeIcon icon={faGears} className="custom-icon" /><br /> API DEVELOPER</div>
            </div>
        </div>
    );
}
export default Service;