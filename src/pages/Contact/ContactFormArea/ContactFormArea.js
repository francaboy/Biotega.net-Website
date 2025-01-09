import React from "react";
import { Link } from "react-router-dom";

const ContactFormArea = () => {
  return (
    <>
      <section className="contact-form-area gray-bg pt-100 pb-100">
        <div className="container">
          <div className="form-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8">
                <div className="section-title mb-55">
                  <p>
                    <span></span> Biotega.
                  </p>
                  <h1>Imate pitanje?</h1>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3 d-none d-xl-block ">
                <div className="section-link mb-80 text-end"></div>
              </div>
            </div>
            <div className="contact-form">
              <form id="contact-form" action="#">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-box user-icon mb-30">
                      <input type="text" name="name" placeholder="Vaše Ime" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-box email-icon mb-30">
                      <input type="text" name="email" placeholder="Vaš Email" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-box phone-icon mb-30">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Vaš Telefon"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-box subject-icon mb-30">
                      <input type="text" name="subject" placeholder="Naslov" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-box message-icon mb-30">
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Poruka"
                      ></textarea>
                    </div>
                    <div className="contact-btn text-center">
                      <button
                        className="primary_btn btn-icon ml-0"
                        type="button"
                      >
                        <span>+</span> Pošalji
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <p className="ajax-response text-center"></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFormArea;
