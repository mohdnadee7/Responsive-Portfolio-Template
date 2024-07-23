import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
function Project() {
    return (
        <div className='project-section py-5'>
            <div classname="row">
                <h1 className='heading'>Our Projects</h1>
                <p className='text-center' style={{ color: "silver", padding: "0px 20px" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="row mb-3">
                <div className="col-sm-4">
                <div className="project-box">
                        <div className="image-container">
                            <img src={img1} alt="Project" className="project-image" />
                            <div className="overlay">
                                <div className="overlay-text">Your Text Here</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                <div className="project-box">
                        <div className="image-container image-container-odd">
                            <img src={img8} alt="Project" className="project-image" />
                            <div className="overlay">
                                <div className="overlay-text">Your Text Here</div>
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
                                <div className="overlay-text">Your Text Here</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                <div className="project-box">
                        <div className="image-container">
                            <img src={img2} alt="Project" className="project-image" />
                            <div className="overlay">
                                <div className="overlay-text">Your Text Here</div>
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
                                <div className="overlay-text">Your Text Here</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                <div className="project-box">
                        <div className="image-container image-container-odd">
                            <img src={img6} alt="Project" className="project-image" />
                            <div className="overlay">
                                <div className="overlay-text">Your Text Here</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Project;