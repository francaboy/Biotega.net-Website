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
                    Kompanija Biotega osnovana je 1953. godine, prvobitno pod
                    nazivom Vetprom. Tokom decenija izgradili smo snažnu i
                    uglednu firmu, zasnovanu na predanom radu i kontinuiranom
                    razvoju. Oslanjamo se na bogatu tradiciju, stručnost i brz
                    odgovor na promjene tržišta. Ponosni smo na Biotegu kakva je
                    danas — kompaniju u čijem razvoju važnu ulogu ima i vaše
                    povjerenje. Posvećeni kvalitetu, poslovnoj usklađenosti i
                    društvenoj odgovornosti, s fokusom na ispunjavanje
                    očekivanja naših partnera, vlasnika i zaposlenih, svoju
                    misiju sprovodimo već više od pola vijeka. Promjene su
                    stalna karakteristika našeg puta, a istorija Biotege
                    obilježena je brojnim značajnim prekretnicama. Ponosimo se
                    postignutim poslovnim uspjesima, dugoročnim odnosima s
                    partnerima, stručnošću i predanošću naših zaposlenih, kao i
                    rastom i ugledom koji smo stekli. Gledamo ka budućnosti s
                    jasnom vizijom, oslonjeni na čvrste temelje ukorijenjene u
                    našoj istoriji.
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
