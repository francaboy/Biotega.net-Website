import React from "react";
import { Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";

const Sidebar = ({ show, handleClose }) => {
  const Home = <NavLink to="/">Početna</NavLink>;
  const Department = <NavLink to="/about">O nama </NavLink>;
  const Doctors = <NavLink to="/servicesTwo">Usluge </NavLink>;
  const Shop = <NavLink to="/portfolioThreeColumn">Partneri</NavLink>;
  const News = <NavLink to="/contact">Kontakt</NavLink>;

  return (
    <>
      <div>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          className="side__bar"
        >
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Collapsible
              trigger={Home}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            ></Collapsible>

            <Collapsible
              trigger={Department}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            ></Collapsible>

            <Collapsible
              trigger={Doctors}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            ></Collapsible>

            <Collapsible
              trigger={Shop}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            ></Collapsible>

            <Collapsible
              trigger={News}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            ></Collapsible>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidebar;
