import React, { useState } from "react";

import "./Footer.css";
import Rules from "../../../Assets/Images/image-rules.svg";
import Close from "../../../Assets/Images/icon-close.svg";

const Footer = ({ setScore }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const startAgain = () => {
    setScore(0);
  };

  return (
    <div className="footer">
      <footer>
        <button className="start-again" onClick={startAgain}>
          START AGAIN
        </button>

        <button className="rules" onClick={toggle}>
          RULES
        </button>
      </footer>
      {modal ? (
        <div className="modal-container">
          <div className="modal-box">
            <div className="modal-header">
              <button onClick={toggle}>
                <img src={Close} alt="close" className="close-icon" />
              </button>
            </div>
            <div>
              <img src={Rules} alt="rules" className="rules-icon" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Footer;
