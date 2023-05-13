import "./header-styles.scss";
import { LinkedinIcon } from "../../assets/navbar/linkeding";
import { InstagramIcon } from "../../assets/navbar/instagram";
import { FacebookIcon } from "../../assets/navbar/facebook";
import { MenuIcon } from "../../assets/navbar/menu-icon";
import { MenuIconFilled } from "../../assets/navbar/menu-icon-filled";

import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const NavLinks = [
  {
    id: 1,
    pathname: "/",
    title: "Home",
  },
  {
    id: 2,
    pathname: "/services",
    title: "Serviços",
  },
  {
    id: 3,
    pathname: "/products",
    title: "Produtos",
  },
  {
    id: 4,
    pathname: "/contact",
    title: "Contato",
  },
  {
    id: 5,
    pathname: "/about",
    title: "Sobre",
  },
];

export const Header = () => {
  const [menuBar, setMenuBar] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
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
            {NavLinks.map((link) => (
              <li key={link.id}>
                <a
                  className={pathname === link.pathname ? "nav-link current-page" : "nav-link"}
                  href={link.pathname}
                >
                  {link.title}
                </a>
              </li>
            ))}
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
      <Outlet />
    </>
  );
};
