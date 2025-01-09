import React from "react";
import HomeSIngleService from "../../../../components/HomeSIngleService/HomeSIngleService";

const HomeServices = () => {
  return (
    <>
      <section className="servcies-area gray-bg pt-115 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
              <div className="section-title text-center pos-rel mb-75">
                <div className="section-icon">
                  <img
                    className="section-back-icon"
                    src="img/section/section-back-icon.png"
                    alt=""
                  />
                </div>
                <div className="section-text pos-rel home_ser_title">
                  <h5>Biotega.</h5>
                  <h1>Proizvodi koje Vam Nudimo.</h1>
                </div>
                <div className="section-line pos-rel">
                  <img src="img/shape/section-title-line.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <HomeSIngleService icon="1" title="Medicinski Lijekovi" />
            <HomeSIngleService icon="2" title="Dodaci Prehrani" />
            <HomeSIngleService icon="3" title="Medicinski Aparati" />
            <HomeSIngleService icon="4" title="Medicinska Kozmetika" />
            <HomeSIngleService icon="5" title="Premium Kozmetika" />
            <HomeSIngleService icon="6" title="Medicinski Materijal" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
