import React from "react";
import { Link } from "react-router-dom";

const AboutAppoinment = () => {
  return (
    <>
      <section
        className="appoinment-section pt-120 pb-120"
        data-background="img/bg/appointment.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="appoinment-box white">
                <div className="appoinment-content">
                  <span className="small-text">Biotega</span>
                  <h1>Vaš Pouzdani Partner Za Zdravstvena Rješenja.</h1>
                  <p>
                    Pošto je Biotega specijalizovana za pružanje potpune
                    distribucije, promocije i aktivne prodajne usluge, kao i
                    dodatne vrednosti potrebne za plasiranje lekovitih proizvoda
                    ili medicinskih uređaja na tržište, predstavlja ključnu vezu
                    u opskrbi lekovitim proizvodima, dodacima ishrani,
                    medicinskim uređajima i visokokvalitetnim i inovativnim
                    uslugama koje pružaju zdravlje i blagostanje ljudima.
                    <br></br>
                    <br></br>Mi, zaposleni, posvećeni smo kvalitetu i
                    izvrsnosti, usklađenom ponašanju, sigurnosti, odgovornom
                    ispunjavanju naše misije i posvećenosti prema našim kupcima,
                    s kojima već više od pola veka stvaramo uspešnu poslovnu
                    priču. Posjedujemo stručnost, godine iskustva, znanje
                    tržišta, povećanu odgovornost i jasnu viziju koju cenimo
                    mnoge međunarodne farmaceutske kompanije, proizvođači
                    medicinskih uređaja i zdravstveni klijenti, kao i renomirani
                    proizvođači inovativnih lekovitih proizvoda i lekova za
                    retke bolesti, koji nam već godinama ukazuju poverenje.
                    <br></br>
                    <br></br>Nudimo visokokvalitetnu implementaciju dodatnih
                    vrednosti koje naši poslovni partneri sve više zahtevaju.
                    Imamo iskustvo, fleksibilnost i sposobnost pružanja usluga
                    koje naši partneri traže na jednom mestu. Kao važna veza
                    između pružatelja zdravstvene zaštite, bolnica, apoteka i
                    krajnjih korisnika, takođe pružamo usmerenu stručnu podršku
                    u području poslovnog partnerstva, medicinskog marketinga,
                    marketinga i prodaje. Podrška i stručna komunikacija
                    odvijaju se putem različitih kanala, kako tradicionalnih,
                    tako i modernih, odnosno digitalnih. Zahvaljujemo svakom od
                    vas, našim cenjenim partnerima, koji nam ukazujete poverenje
                    i stvarate priču o uspehu Biotegom zajedno s nama.<br></br>
                  </p>
                  <ul className="professinals-list pt-30">
                    <li>
                      <i className="fa fa-check"></i>
                      Ujedinjuje nas TEAM SPIRIT.
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      Odlikuje nas MINDSET ZA RAST.
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      UPROFESIONALNI smo, HRABRI I ISTRAJNI.
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      UŽIVAMO U NAŠEM RADU.
                    </li>
                  </ul>
                </div>
                <Link to="/kontakt" className="primary_btn mt-40">
                  Kontaktirajte Nas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAppoinment;
