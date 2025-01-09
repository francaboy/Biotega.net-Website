import React from "react";
import { Link } from "react-router-dom";

const HomeFact = () => {
  return (
    <>
      <section className="fact-area fact-map primary-bg pos-rel pt-115 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-10">
              <div className="section-title pos-rel mb-45">
                <div className="section-text section-text-white pos-rel">
                  <h5>Biotega.</h5>
                  <h1 className="white-color">Pouzdane Usluge u Zdravstvu.</h1>
                </div>
              </div>
              <div className="section-button section-button-left mb-30">
                <Link to="/usluge" className="primary_btn btn-icon ml-0">
                  <span>+</span>Naše Usluge
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-lg-6 col-md-8">
              <div className="cta-satisfied">
                <div className="single-satisfied mb-50">
                  <h1>20+</h1>
                  <h5>
                    {" "}
                    <i className="fas fa-user"></i> Komercijalne i distributivne
                    usluge
                  </h5>
                  <p>
                    Biotega pruža vrhunske komercijalne i distributivne usluge
                    koje osiguravaju siguran i efikasan pristup tržištima.
                  </p>
                </div>
                <div className="single-satisfied mb-50">
                  <h1>100+</h1>
                  <h5>
                    <i className="far fa-thumbs-up"></i> Podrška u regulatornim
                    procesima
                  </h5>
                  <p>
                    Navigacija kroz složene regulatorne zahtjeve može biti
                    izazovna. Biotega nudi stručnu podršku u svim fazama
                    regulatornih procesa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFact;
