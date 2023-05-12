import "./header-styles.scss";
import { LinkedinIcon } from "../../assets/navbar/linkeding";
import { InstagramIcon } from "../../assets/navbar/instagram";
import { FacebookIcon } from "../../assets/navbar/facebook";
import { MenuIcon } from "../../assets/navbar/menu-icon";
import { MenuIconFilled } from "../../assets/navbar/menu-icon-filled";

import { useState } from "react";

// Only going to change this structure if with the routes it can still works the current-page class
export const Header = () => {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <header className={menuBar ? "active header" : "header"}>
      <nav className="navbar">
        <div className="menu-container">
          <a className="logo" href="/">
            <h1>LOGO</h1>
          </a>
          <a onClick={() => setMenuBar(!menuBar)} className="menu-icon">
            {menuBar ? <MenuIconFilled /> : <MenuIcon />}
          </a>
        </div>

        <ul className="nav-links">
          <li>
            <a className="nav-link current-page" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="/services">
              Serviços
            </a>
          </li>
          <li>
            <a className="nav-link" href="/products">
              Produtos
            </a>
          </li>
          <li>
            <a className="nav-link" href="/contact">
              Contato
            </a>
          </li>
          <li>
            <a className="nav-link" href="/about">
              Sobre
            </a>
          </li>
          <li className="nav-link media-icons">
            <a
              title="Linkedin"
              className="nav-link media-icon"
              target="_blank"
              href="https://www.linkedin.com/company/panificadora-silva-rocha"
            >
              <LinkedinIcon />
            </a>
            <a
              title="Instagram"
              className="nav-link media-icon"
              target="_blank"
              href="https://www.instagram.com/pansilvarocha/"
            >
              <InstagramIcon />
            </a>
            <a
              title="Facebook"
              className="nav-link media-icon"
              target="_blank"
              href="http://www.facebook.com/panificadorasilvarocha/"
            >
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
