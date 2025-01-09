import React from "react";

const ContactMap = () => {
  return (
    <>
      <section className="map-area">
        <div style={{ width: "100%" }}>
          <iframe
            title="Contact"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.9697377742677!2d17.208923900000002!3d44.7610319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e03bdba4109e5%3A0x4490885288ea548b!2sBIOTEGA%20D.O.O!5e0!3m2!1sen!2sba!4v1736376439661!5m2!1sen!2sba"
            style={{ width: "100%" }}
            height={600}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactMap;
