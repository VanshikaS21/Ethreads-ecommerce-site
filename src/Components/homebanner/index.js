import React from "react";
import Slider from "react-slick";
import women from '../../assets/images/Website_WebSlider_Template_Webslider_1-960x600.jpg';
import men from '../../assets/images/MB_HP-Slider-1-660x330-m-.jpg';
import kids from '../../assets/images/7736039.jpg';
import anything from '../../assets/images/9556174.jpg';
const HomeBanner = ()=>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };

return (
    <div className="homebanner">
     <Slider {...settings}>
        <div className="item">
            <img src={women} className="d-block w-100"/>
        </div>
        <div className="item">
            <img src={men} className="d-block w-100"/>
        </div>
        <div className="item">
            <img src={kids} className="d-block w-100"/>
        </div>
        <div className="item">
            <img src={anything} className="d-block w-100"/>
        </div>
     </Slider>

    </div>
)
}
export default HomeBanner;