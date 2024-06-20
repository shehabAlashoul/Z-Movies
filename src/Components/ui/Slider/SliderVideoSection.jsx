import React, { useEffect } from "react";
import Slider from "react-slick";
import './Slider.css'
import video_cover from "../../../assets/video-cover.webp"
import video_cover2 from "../../../assets/video-cover2.webp"
import { Link } from "react-router-dom";

export default function SliderVideoSection() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(()=>{
    const trailer_content_ele = document.querySelectorAll('.trailer-content img')
    Array.prototype.forEach.call(trailer_content_ele,(element)=>{
        element.getAttribute("src")
    })
  })
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="trailer-content position-relative">
            <div className="position-relative">
            <img src={video_cover2} alt="" className="rounded-3 img-fluid" />
          <div className="d-flex justify-content-center rounded-3 align-items-center position-absolute top-0 start-0 bottom-0 end-0">
          <i className="fa-solid fa-play fs-1 text-white"></i>
          </div>
            </div>
          <div className="text-white text-center pt-3">
          <h6 className="fw-bolder mb-0">
          <Link className="text-decoration-none"> Doctor Who</Link>
              </h6>
              <p className="pt-1">Next Time - Dot and Bubble</p>
          </div>
        </div>
        
      </Slider>
    </div>
  );
}
