import profile from '../images/image.png';
function About(){
    return (
<div className='about-me'>
                    <div class="row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <div class="card border-0 about-profile">
                                <div class="card-body">
                                    <img src={profile} style={{ height: "100%", width: "100%" }} />
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card border-0">
                                <div class="card-body text-light">
                                    <h1 className='heading-about text-center py-3'>About Me</h1>
                                    <p>Full Stack Developer proficient in .NET Framework and React, with experience in UK-based projects.</p>
                                    <table class='about-table'>
                                        <tr>
                                            <th>Name:</th>
                                            <td>Mohammad Nadeem Ansari</td>
                                        </tr>
                                        <tr>
                                            <th>Date of birth:</th>
                                            <td>May 01, 2000</td>
                                        </tr>
                                        <tr>
                                            <th>Address:</th>
                                            <td>Azmatgarh Azamgarh 276124 UP India</td>
                                        </tr>
                                        <tr>
                                            <th>Zip code:</th>
                                            <td>276124</td>
                                        </tr>
                                        <tr>
                                            <th>Email:</th>
                                            <td>mohammadnadeem9825@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th>Phone:</th>
                                            <td>+91-8924957027</td>
                                        </tr>
                                    </table>
                                    <p style={{ marginTop: "10px", fontSize: "20px" }}><span style={{ color: "#f8b90a" }}>20</span> Projects complete</p>
                                    <a href="" className='download-dv-btn'>DOWNLOAD CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}
export default About;