import React from "react";
import placeholderImage from "../../../assets/placeholder.svg";
import styles from "./Placeholder.module.css";
import Slider from "react-slick";
import "../Slider/Slider.css";

export default function Placeholder() {
  const n = 20;
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
  return (
    <>
      <div className="mt-4">
        <div className="slider-container">
          <Slider {...settings}>
            {[...Array(n)].map((e, i) => (
              <div
                key={i}
                className="data-container placeholder-wave"
                aria-hidden="true"
              >
                <div className="rounded-3 position-relative">
                  <div
                    className={`position-relative rounded-3 ${styles.placeholder_image}`}
                  >
                    <div
                      className={`percentile-rating position-absolute bg-dark-blue text-white rounded-circle ${styles.rate}`}
                    >
                      NR<span></span>
                    </div>
                    <img
                      src={placeholderImage}
                      className="rounded-3 w-75 ms-auto me-auto"
                      alt="..."
                      style={{ height: 220, objectFit: "cover" }}
                    />
                  </div>
                  <h6 className="fw-bolder pt-4 mb-0">
                    <span class="placeholder col-12 bg-transparent"></span>
                  </h6>
                  <span class="placeholder col-8 bg-transparent"></span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
