import React from "react";

const CommonSectionArea = ({ area_header }) => {
  return (
    <>
      <section className="about-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">{area_header}</div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-right-side pt-55 mb-30">
                <div className="about-title mb-20">
                  <h5>O Nama</h5>
                  <h1>Kratka Istorija kompanije Biotega.</h1>
                </div>
                <div className="about-text mb-50">
                  <p>
                    Kompanija Biotega osnovana je 1953. godine, prvo pod nazivom
                    Vetprom. Kroz decenije smo izgradili čvrstu i uglednu firmu,
                    snažnim radom i kontinuiranim razvojem. Oslanjamo se na
                    tradiciju, znanje i brz odgovor na promjene na tržištu.
                    Ponosni smo na Biotegu kakva je danas, što je takođe i zbog
                    vašeg povjerenja u nas. Posvećeni kvalitetu, poslovnoj
                    usklađenosti i društvenoj odgovornosti, usmjereni prema
                    ostvarivanju očekivanja naših poslovnih partnera, vlasnika i
                    zaposlenih, već pola vijeka obavljamo našu misiju. Projmene
                    su stalna karakteristika, a tokom istorije Biotege dogodilo
                    se mnogo važnih prekretnica. Ponosimo se našim poslovnim
                    uspjesima, dugoročnim poslovnim odnosima s našim partnerima,
                    stručnošću i predanošću naših zaposlenika, te rastom i
                    poslovnom reputacijom Biotege. Gledamo prema budućnosti s
                    jasnom vizijom i čvrstim temeljima ukorenjenim u našoj
                    istoriji.
                  </p>
                </div>
                <div className="our-destination">
                  <div className="single-item mb-30">
                    <div className="mv-icon f-left">
                      <img src="img/about/destination-icon-1.png" alt="" />
                    </div>
                    <div className="mv-title fix">
                      <h3>Naše Vrijednosti</h3>
                      <p>
                        Vodimo se odgovornošću prema poslu, vlasnicima,
                        zaposlenima i životnoj sredini, kao i poštenjem prema
                        poslovnim partnerima i kolegama.
                      </p>
                    </div>
                  </div>
                  <div className="single-item">
                    <div className="mv-icon f-left">
                      <img src="img/about/destination-icon-2.png" alt="" />
                    </div>
                    <div className="mv-title fix">
                      <h3>Naša Vizija</h3>
                      <p>
                        Postati lider u pružanju inovativnih rješenja za
                        zdravstvenu industriju, povezujući ljude s proizvodima i
                        uslugama koje unapređuju kvalitet života. Težimo
                        izgradnji dugoročnih partnerstava kroz povjerenje,
                        stručnost i kontinuirani razvoj.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonSectionArea;
