import React, { useContext, useEffect } from "react";
import "./Home.css";
import oscar from "../../assets/oscars.svg";
import MainSlider from "../ui/Slider/Slider";
import SliderVideoSection from "../ui/Slider/SliderVideoSection";
import { moviesContext } from "../../context/MoviesContext";
import Loading from "../ui/Loading/Loading";
import { TVContext } from "../../context/TVContext";
import { PeopleContext } from "../../context/PeopleContext";

function Home() {
  const { trendingMovies, getTrendingMovies, Lodaing:loadingMovies } =
    useContext(moviesContext);
    const {Loading:loadingTV,getTrendingTV,TrendingTV}= useContext(TVContext)
    const {Loading:loadingPeople,getPopularPeople,PopularPeople}= useContext(PeopleContext)
  const slider_btn = document.getElementsByClassName("slider-btn");
// handel request for trending movies
  useEffect(() => {
    if (trendingMovies !== null) return;
    getTrendingMovies();
  }, [getTrendingMovies, trendingMovies]);
// handel request for trending TV
useEffect(()=>{
  if (TrendingTV !== null) return
  getTrendingTV()
},[TrendingTV,getTrendingTV])
// handel request for popular people
useEffect(()=>{
  if (PopularPeople !== null) return
  getPopularPeople()
},[PopularPeople,getPopularPeople])

  // handel event to slider btn
  useEffect(() => {
    function getAllSiblings(element, parent) {
      const children = [...parent.children];
      return children.filter((child) => child !== element);
    }
    const handelEvent = (element) => {
      const allSiblings = getAllSiblings(element, element.parentNode);
      allSiblings.forEach((sibling) => {
        sibling.classList.remove("active-btn");
      });
      element.classList.add("active-btn");
    };
    Array.prototype.forEach.call(slider_btn, (element) => {
      element.addEventListener("click", () => handelEvent(element));
    });
    return () =>
      Array.prototype.forEach.call(slider_btn, (element) => {
        element.removeEventListener("click", () => handelEvent(element));
      });
  }, [slider_btn]);
  return (
    <>
      <div className="d-inline-block text-center bg-dark-blue text-dark-emphasis w-100 pt-2 pb-2">
        <h1 className="fw-bold">Z-Movies</h1>
      </div>
      <section className="header position-relative">
        <div className="layer position-absolute w-100 h-100 "></div>
        <div className="container-fluid p-5 position-relative z-3">
          <div className="title pb-5 text-white">
            <h2 className="fw-bold fs-1">Welcome.</h2>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>
          <div className="search position-relative mt-4">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="search for a movie, tv show, person........"
            />
            <button className="search-btn btn btn-primary rounded-5 position-absolute top-0 end-0 fw-bold">
              search
            </button>
          </div>
        </div>
        <div className="oscar-section position-relative">
          <div className="container-fluid pt-4 pb-4">
            <img src={oscar} alt="oscar" width={300} />
            <button className="btn text-white border-2 border-white rounded-5 d-block mt-4 d-flex align-items-center fw-medium">
              View the winners <i className="fa-solid fa-arrow-right ps-2"></i>
            </button>
          </div>
        </div>
      </section>
      {/* trending section start */}
      <section className="trending container-fluid pt-4 pb-4">
        <div className="d-flex align-items-center column-gap-3 mb-4">
          <h2 className="fs-4">Trending Movies</h2>
          <div className="overflow-hidden bg-transparent border border-1 border-dark rounded-5 d-flex  fw-semibold">
            <div
              id="day"
              onClick={() => {
                getTrendingMovies("day");
              }}
              className="slider-btn p-1 rounded-5 ps-4 pe-4 active-btn pointer"
            >
              Today
            </div>
            <div
              id="week"
              onClick={() => {
                getTrendingMovies("week");
              }}
              className="slider-btn p-1 rounded-5 ps-4 pe-4 pointer"
            >
              This Week
            </div>
          </div>
        </div>
        <div>
          {loadingMovies ? <Loading /> : <MainSlider data={trendingMovies} />}
        </div>
      </section>
      {/* trending section end */}
      {/* Latest Trailers section start */}
      <section className="latest-trailers pt-4 pb-4 position-relative">
        <div className="layer position-absolute top-0 bottom-0 start-0 end-0"></div>
        <div className="container-fluid position-relative z-1">
          <div className="d-flex align-items-center column-gap-3 mb-4">
            <h2 className="fs-4 text-white">Latest Trailers</h2>
            <div className="slider-btn-container overflow-hidden bg-transparent border border-1 rounded-5 d-flex  fw-semibold">
              <div className="slider-btn p-1 rounded-5 ps-4 pe-4 active-btn pointer">
                Poplar
              </div>
              <div className="slider-btn p-1 rounded-5 ps-4 pe-4 pointer">
                Streaming
              </div>
              <div className="slider-btn p-1 rounded-5 ps-4 pe-4 pointer">
                On TV
              </div>
              <div className="slider-btn p-1 rounded-5 ps-4 pe-4 pointer">
                For Rent
              </div>
              <div className="slider-btn p-1 rounded-5 ps-4 pe-4 pointer">
                In Theaters
              </div>
            </div>
          </div>
          <div className="pt-4">
            <SliderVideoSection />
          </div>
        </div>
      </section>
      {/* Latest Trailers section end */}
      {/* What's Popular section start */}
      <section className="What's-Popular container-fluid pt-4 pb-4">
        <div className="d-flex align-items-center column-gap-3 mb-4">
          <h2 className="fs-4">Trending TV</h2>
          <div className="overflow-hidden bg-transparent border border-1 border-dark rounded-5 d-flex fw-semibold">
            <div onClick={() => {
                getTrendingTV("day");
              }} className="slider-btn p-1 rounded-5 ps-4 pe-4 active-btn pointer">
              Today
            </div>
            <div onClick={() => {
                getTrendingTV("week");
              }} className="slider-btn p-1 rounded-5 ps-4 pe-4 pointer">
              This Week
            </div>
          </div>
        </div>
        <div>
        {loadingTV ? <Loading /> : <MainSlider data={TrendingTV} />}
        </div>
      </section>
      {/* What's Popular section end */}
      {/* Free To Watch section start */}
      <section className="Free-To-Watch container-fluid pt-4 pb-4">
        <div className="d-flex align-items-center column-gap-3 mb-4">
          <h2 className="fs-4">Free To Watch</h2>
          <div className="overflow-hidden bg-transparent border border-1 border-dark rounded-5 d-flex fw-semibold">
            <div onClick={() => {
                getPopularPeople("day");
              }} className="slider-btn p-1 rounded-5 ps-4 pe-4 active-btn pointer">
              Today
            </div>
            <div onClick={() => {
                getPopularPeople("week");
              }} className="slider-btn p-1 rounded-5 ps-4 pe-4 pointer">This Week</div>
          </div>
        </div>
        <div>
        {loadingPeople ? <Loading /> : <MainSlider data={PopularPeople} />}
        </div>
      </section>
      {/* Free To Watch section end */}
    </>
  );
}

export default Home;
