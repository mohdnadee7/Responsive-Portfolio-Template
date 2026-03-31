import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,
     faLaptopCode,
    faServer,
    faCloud,
    faBug,faDatabase
} from '@fortawesome/free-solid-svg-icons';

function Service() {
    return (
        <div className='py-5'id='service-section'>
            <div classname="row">
                <h1 className='heading'>Services</h1>
                <p className='text-center' style={{ color: "silver", padding: "0px 20px" }}>I offer API development, web app development, and web design. I have expertise in delivering high-quality solutions in these areas.</p>
            </div>
         <div className="row service-container justify-content-center p-3">
  
  <div className="col-md-4 col-sm-6">
    <div className="service-box">
      <FontAwesomeIcon icon={faLaptopCode} className="custom-icon" />
      <h5>Web Design</h5>
    </div>
  </div>

  <div className="col-md-4 col-sm-6">
    <div className="service-box">
      <FontAwesomeIcon icon={faCode} className="custom-icon" />
      <h5>Software Developer</h5>
    </div>
  </div>

  <div className="col-md-4 col-sm-6">
    <div className="service-box">
      <FontAwesomeIcon icon={faServer} className="custom-icon" />
      <h5>API Developer</h5>
    </div>
  </div>

  <div className="col-md-4 col-sm-6">
    <div className="service-box">
      <FontAwesomeIcon icon={faCloud} className="custom-icon" />
      <h5>IIS Server</h5>
    </div>
  </div>

  <div className="col-md-4 col-sm-6">
    <div className="service-box">
      <FontAwesomeIcon icon={faBug} className="custom-icon" />
      <h5>Bug Fixing</h5>
    </div>
  </div>

  <div className="col-md-4 col-sm-6">
    <div className="service-box">
      <FontAwesomeIcon icon={faDatabase} className="custom-icon" />
      <h5>GitHub</h5>
    </div>
  </div>

</div>
        </div>
    );
}
export default Service;