import React from "react";
import { Link } from "react-router-dom";
import HomeSingleTeam from "../../../../components/HomeSingleTeam/HomeSingleTeam";

const HomeOurTeam = () => {
  return (
    <>
      <section className="team-area pt-115 pb-55">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="section-title pos-rel mb-75">
                <div className="section-icon">
                  <img
                    className="section-back-icon back-icon-left"
                    src="img/section/section-back-icon.png"
                    alt=""
                  />
                </div>
                <div className="section-text pos-rel">
                  <h5>Biotega.</h5>
                  <h1>Partnerstva od Povjerenja.</h1>
                </div>
                <div className="section-line pos-rel">
                  <img src="img/shape/section-title-line.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="section-button text-end d-none d-lg-block pt-80 team_btn">
                <Link to="/partneri" className="primary_btn btn-icon ml-0">
                  <span>+</span>Naši Partneri
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <HomeSingleTeam image="1" />
            <HomeSingleTeam image="2" />
            <HomeSingleTeam image="3" />
            <HomeSingleTeam image="4" />
            <HomeSingleTeam image="5" />
            <HomeSingleTeam image="6" />
            <HomeSingleTeam image="7" />
            <HomeSingleTeam image="8" />
            <HomeSingleTeam image="9" />
            <HomeSingleTeam image="10" />
            <HomeSingleTeam image="11" />
            <HomeSingleTeam image="12" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeOurTeam;
