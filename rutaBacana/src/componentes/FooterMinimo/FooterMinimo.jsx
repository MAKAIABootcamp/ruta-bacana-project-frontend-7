import React from "react";
import "./footerMinimo.scss";
import Instagram from "../../assets/images/Instagram.png";
import gmail from "../../assets/images/gmail.png";
import Facebook from "../../assets/images/Facebook.png";
import x from "../../assets/images/x.png";

const FooterMinimo = () => {
  return (
    <footer className="minimalFooterComponent">
      <section className="minimalFooterCopyRight">
        <a
          href="https://accounts.google.com/ServiceLogin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmail} alt="Gmail" />
        </a>
        <a
          href="https://www.facebook.com/share/CFcmWNXZ1z9jyp8p/?mibextid=qi2Omg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Facebook} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/ruta.bacana?igsh=MWhlaXY1Ynl5bDNpYw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
        <a
          href="https://twitter.com/BacanaRuta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={x} alt="X" />
        </a>
      </section>
    </footer>
  );
};
export default FooterMinimo;
