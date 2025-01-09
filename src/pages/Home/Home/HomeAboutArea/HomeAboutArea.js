import React from "react";

const HomeAboutArea = () => {
  return (
    <>
      <section className="about-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5 about_left">
              <div className="medical-icon-brand-2">
                <img src="img/about/medical-brand-icon-border.png" alt="" />
              </div>
              <div className="about-left-side pos-rel mb-30">
                <div className="about-front-img">
                  <img src="img/about/about-img.jpg" alt="" />
                </div>
                <div className="about-shape">
                  <img src="img/about/about-shape.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-right-side pt-55 mb-30">
                <div className="about-title mb-20">
                  <h5>O nama</h5>
                  <h1>Biotega: Povjerenje i inovacije.</h1>
                </div>
                <div className="about-text">
                  <p>
                    Naša stručnost obuhvata distribuciju, logistiku i
                    prilagođena poslovna rješenja koja odgovaraju na najnovije
                    zahtjeve industrije. U korak s globalnim trendovima,
                    neprestano radimo na unaprjeđenju naših usluga, koristeći
                    savremene tehnologije i inovativne pristupe kako bismo
                    osigurali efikasnost i tačnost u svakom koraku.
                  </p>
                  <p>
                    Biotega je lider u pružanju inovativnih rješenja za
                    farmaceutsku, biotehnološku, potrošačku zdravstvenu i
                    industriju medicinskih uređaja. Kao pouzdani komercijalni i
                    distributivni partner, omogućavamo našim klijentima da
                    dosegnu nova tržišta, prošire svoje poslovanje i unaprijede
                    kvalitet života širom regije. S misijom da unaprijedimo
                    zdravlje i kvalitet života, posvećeni smo izgradnji
                    dugoročnih partnerstava i stvaranju vrijednosti za sve naše
                    klijente i partnere.
                  </p>
                  <br />
                </div>
                {/*<div className="about-author d-flex align-items-center">
                  <div className="author-ava">
                    <img src="img/about/author-ava.png" alt="" />
                  </div>
                  <div className="author-desination">
                    <h4>Rosalina D. Williamson</h4>
                    <h6>founder</h6>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAboutArea;
