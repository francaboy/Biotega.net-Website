import React from "react";
import { Link } from "react-router-dom";
import HomeSingleFooterBlog from "../HomeSingleFooterBlog/HomeSingleFooterBlog";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top primary-bg footer-map pos-rel pt-120 pb-80">
          <div className="container">
            <div
              className="row align-items-center"
              style={{ position: "relative", zIndex: "9999" }}
            >
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="footer-contact-info footer-contact-info-3 mb-40">
                  <div className="footer-logo mb-35">
                    <Link to="/">
                      <img src="img/logo/footer-logo-3.svg" alt="" />
                    </Link>
                  </div>
                  <div className="footer-contact-content mb-25">
                    <p>
                      Sudski registar: 057-0-Reg-23-001202,
                      <br />
                      Okružni privredni sud Banja Luka.
                      <br />
                      ID broj: 4403258750006
                      <br />
                      PDV broj: 403258750006
                      <br />
                      Osobe ovlašćene za zastupanje BIOTEGA d.o.o.:
                      <br />
                      Boris Pavković, CEO
                      <br />
                      Zoran Balaban, Deputy CEO
                      <br />
                      <br />
                      Banka: ProCredit Bank d.d. Sarajevo, BiH
                      <br />
                      Bankovni račun: 1941416878200236
                      <br />
                      IBAN: BA391941416878200236
                      <br />
                      SWIFT: MEBBBA22
                    </p>
                  </div>
                  <div className="footer-emailing">
                    <ul>
                      <li>
                        <i className="far fa-envelope"></i>
                        info@biotega.net
                      </li>

                      <li>
                        <i className="far fa-flag"></i>Sime Miljuša bb, 78000
                        Banja Luka, BiH
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="footer-widget mb-40">
                  <div className="footer-title">
                    <h3>Brzi Linkovi</h3>
                  </div>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link to="/">Početna</Link>
                      </li>
                      <li>
                        <Link to="/o-nama">O nama</Link>
                      </li>
                      <li>
                        <Link to="/usluge">Usluge</Link>
                      </li>
                      <li>
                        <Link to="/partneri">Partneri</Link>
                      </li>
                      <li>
                        <Link to="/kontakt">Kontakt</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-25 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-copyright footer-copyright-3 text-center">
                  <p>
                    {" "}
                    ©{new Date().getFullYear()} Biotega d.o.o. Sva prava
                    zadržana. Made by
                    <a href="https://srdjanmilosevic.com/"> Franca.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
