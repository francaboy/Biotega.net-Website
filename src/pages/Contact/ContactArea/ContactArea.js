import React from "react";

const ContactArea = () => {
  return (
    <>
      <section
        className="contact-area pt-120 pb-90"
        data-background="assets/img/bg/bg-map.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="contact text-center mb-30">
                <i className="fas fa-envelope"></i>
                <h3>E-mail</h3>
                <p>info@biotega.net</p>
                <p>hr@biotega.net</p>
                 <p>servis@biotega.net</p> 
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="contact text-center mb-30">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Lokacija</h3>
                <p>
                  Sime Miljuša bb,<br></br> 78000 Banja Luka, <br></br> Bosna i
                  Hercegovina
                </p>
              </div>
            </div>
            <div className="col-xl-4  col-lg-4 col-md-4 ">
              <div className="contact text-center mb-30">
                <i className="fas fa-phone"></i>
                <h3>Telefon</h3>
                <p>Centrala: +387 51 439 406</p>
                <p>Prodaja: 051/439-405</p>
                <p>Fax: 051/439-392</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
