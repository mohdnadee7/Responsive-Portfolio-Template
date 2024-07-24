import React, { useEffect } from 'react';
import slid1 from '../images/slid-1.jpg';
import slid2 from '../images/slid-2.jpg';
function Home() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js')
            .then(() => {
                const carousel = document.querySelector('#carouselExampleDark');
                if (carousel) {
                    const bootstrap = require('bootstrap');
                    new bootstrap.Carousel(carousel);
                }
            })
            .catch(err => console.error('Error loading Bootstrap JS:', err));
    }, []);
    return (
        <div id='home-section'>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src={slid1} className="d-block w-100" alt="Slide 1" />
                        <a href="" className='carousel-hire-btn'>HIRE ME</a>
                        <a href="" className='carousel-work-btn'>MY WORKS</a>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={slid2} className="d-block w-100" alt="Slide 2" />
                        <a href="" className='carousel-hire-btn'>HIRE ME</a>
                        <a href="" className='carousel-work-btn'>MY WORKS</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;
