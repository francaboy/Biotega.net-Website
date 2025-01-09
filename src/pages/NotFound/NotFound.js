import React from "react";
import { Link } from "react-router-dom";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/Shared/Footer";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";

const NotFound = () => {
  return (
    <>
      <HomeHeader />
      <CommonPageHeader
        title="Stranica nije pronađena"
        subtitle="404 Nije Pronađena"
      />

      <div className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="error-404 not-found mb-20">
                <div className="error-404-content text-center">
                  <h1 className="error-404-title"> 404 </h1>
                  <h2 className="error-title">Stranica nije pronađena</h2>
                  <p className="err-text">
                    Oops! Stranica koju tražite ne postoji. Možda je premještena
                    ili izbrisana.{" "}
                  </p>
                  <Link to="/" className="primary_btn btn-icon ml-0">
                    <span>+</span>NAZAD NA POČETNU
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
