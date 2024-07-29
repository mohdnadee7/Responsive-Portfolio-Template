import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode ,faGears} from '@fortawesome/free-solid-svg-icons';

function Service() {
    return (
        <div className='py-5'id='service-section'>
            <div classname="row">
                <h1 className='heading'>Services</h1>
                <p className='text-center' style={{ color: "silver", padding: "0px 20px" }}>I offer API development, web app development, and web design. I have expertise in delivering high-quality solutions in these areas.</p>
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