import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { Link } from "react-router-dom";

export default function MainSlider({ data, isLoading }) {
  const ImgbaseUrl = "https://image.tmdb.org/t/p/original";
  console.log(isLoading);

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
            {data?.results.map((movie) => (
              <div key={movie.id} className="data-container">
                <div className="rounded-3 position-relative">
                  <div className="position-relative">
                    <div className="percentile-rating position-absolute bg-dark-blue text-white rounded-circle">
                      {Math.floor(
                        (movie.vote_average / 10) * 100 ||
                          (movie.popularity / 100) * 100
                      )}
                      <span>%</span>
                    </div>
                    <img
                      src={
                        movie.profile_path
                          ? ImgbaseUrl + movie.profile_path
                          : ImgbaseUrl + movie.backdrop_path
                      }
                      alt=""
                      className="w-100 rounded-3"
                      style={{ height: 220, objectFit: "cover" }}
                    />
                  </div>
                  <h6 className="fw-bolder pt-4 mb-0">
                    <Link className="text-decoration-none text-dark">
                      {movie.original_title || movie.original_name}
                    </Link>
                  </h6>
                  <p className="text-muted">
                    {movie.release_date || movie.first_air_date}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
