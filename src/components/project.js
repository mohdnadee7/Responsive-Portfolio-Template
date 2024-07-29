import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
function Project() {
    return (
        <div className='py-5' id='project-section'>
            <div classname="row">
                <h1 className='heading'>Our Projects</h1>
                <p className='text-center' style={{ color: "silver", padding: "0px 20px" }}>Explore the projects I've had the privilege of working on: I've been involved in several UK-based projects, showcasing my skills and expertise. Check out some of these projects through the links below.</p>
            </div>
            <div className="row mb-3">
                <div className="col-sm-4">
                <div className="project-box">
                        <div className="image-container">
                            <img src={img1} alt="Project" className="project-image" />
                            <div className="overlay">
                                <div className="overlay-text">Nucleus365<br/> <a href='https://nucleus365.io/' className='text-white bg-transparent lead'>Click Here</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                <div className="project-box">
                        <div className="image-container image-container-odd">
                            <img src={img8} alt="Project" className="project-image" />
                            <div className="overlay">
                                <div className="overlay-text">Transact365<br/> <a href='https://transact365.io/' className='text-white bg-transparent lead'>Click Here</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm-8">
                <div className="project-box">
                        <div className="image-container image-container-odd">
                            <img src={img7} alt="Project" className="project-image" />
                            <div className="overlay">
                                <div className="overlay-text">Mtech online using classic ASP, This is Admin site.<br/> <a href='#' className='text-white bg-transparent lead'>Click Here</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                <div className="project-box">
                        <div className="image-container">
                            <img src={img2} alt="Project" className="project-image" />
                            <div className="overlay">
                                <div className="overlay-text">Mtech Online Co.uk<br/> <a href='https://mtechonline.co.uk/' className='text-white bg-transparent lead'>Click Here</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-sm-4">
                    <div className="project-box">
                        <div className="image-container">
                            <img src={img3} alt="Project" className="project-image" />
                            <div className="overlay">
                                <div className="overlay-text">Transact365<br/> <a href='https://transact365.io/' className='text-white bg-transparent lead'>Click Here</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                <div className="project-box">
                        <div className="image-container image-container-odd">
                            <img src={img6} alt="Project" className="project-image" />
                            <div className="overlay">
                                <div className="overlay-text">Transact365<br/> <a href='https://transact365.io/' className='text-white bg-transparent lead'>Click Here</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Project;