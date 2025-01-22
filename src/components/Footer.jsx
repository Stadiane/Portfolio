import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Mes infos</h4>
            <ul className="list-unstyled">
              <li>ngoufostadiane@gmail.com</li>
              <li>06 02 38 25 71</li>
              <li>Nantes, FRANCE</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
