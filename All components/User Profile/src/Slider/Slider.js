/* For View Others and User Profile------------------>>>>>>>>>>>>>>>>>>>*/

import React from 'react'
import Slider from 'react-slick';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImageSlider() {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 2
        
    }
    return (
        <Slider {...settings} className="roler">
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/444.jpg' alt='' />
                    </div>
                   
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/425.jpg' alt=''/>
                    </div>
                  
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/444.jpg' alt=''/>
                    </div>
                   
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/425.jpg' alt=''/>
                    </div>
                   
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/444.jpg' alt=''/>
                    </div>
                  
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/425.jpg' alt=''/>
                    </div>
                  
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/444.jpg' alt=''/>
                    </div>
                    
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/425.jpg' alt=''/>
                    </div>
                   
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/444.jpg' alt='' />
                    </div>
                   
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/425.jpg' alt='' />
                    </div>
                    
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/444.jpg' alt='' />
                    </div>
                </div>
            </div>
        </Slider >
    )
}

export default ImageSlider