import React from "react";
import { Link } from "react-router-dom";
import useGlobalContext from "../../hooks/useGlobalContext";

const HomeHeroSingleSlide = ({ bg_className }) => {
  const videoPopup = useGlobalContext();
  const { setIsOpen } = videoPopup;
  return (
    <>
      <div
        className={`single-slider slider-height d-flex align-items-center slider_bg_${bg_className}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="hero-text">
                <div className="hero-slider-caption">
                  <h5>S nama do kvalitetnije njege.</h5>
                  <h1>
                    Vaš partner<br></br> za zdravlje.
                  </h1>
                  <p>
                    Biotega je vaš partner u poslovnom razvoju, povezujući
                    lidera u farmaceutskoj, biotehnološkoj, potrošačkoj
                    zdravstvenoj i medicinskoj industriji s ključnim tržištima.
                    Posvećeni kvalitetu, inovacijama i brizi, omogućavamo
                    širenje pristupa proizvodima i rješenjima koja unapređuju
                    živote.
                  </p>
                </div>
                <div className="hero-slider-btn">
                  <Link to="/o-nama" className="primary_btn btn-icon ml-0">
                    <span>+</span>Saznajte Više
                  </Link>

                  <button
                    onClick={() => setIsOpen(true)}
                    className="play-btn popup-video"
                  >
                    <i className="fas fa-play"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeroSingleSlide;
