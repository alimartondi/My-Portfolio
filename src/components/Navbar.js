import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Burger from "react-css-burger";
import "../style/navbar.css";
import Brand from "../image/batubara_org.svg";
import BatubaraWhite from "../image/batubara_white.svg";
// import { Link, Link } from "react-router-dom";
import { Link, animateScroll } from "react-scroll";

export default function NavBar() {
  const [state, setState] = useState({
    active: false,
  });

  const isOnTop = useScrollHandler();

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const open = () => setState(!open);

  return (
    <header className="header-area" id="header">
      <nav className={`navbar ${isOnTop ? "" : "scrolled"}`}>
        <Container>
          <div className="navbar-brand">
            <img src={Brand} alt="Logo" onClick={scrollToTop} />
          </div>
          <div className={state.active ? "nav-items active" : "nav-items"}>
            <div
              className="sidebar-brand text-center mt-5 d-block d-xl-none"
              onClick={open}
            >
              <img
                src={BatubaraWhite}
                alt="sidebar logo"
                onClick={scrollToTop}
              />
            </div>
            <hr className="d-block d-xl-none text-center" />
            <Link
              to="main"
              smooth={true}
              spy={true}
              offset={-80}
              className="nav-link"
              onClick={open}
            >
              Tentang Saya
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              spy={true}
              offset={-80}
              className="nav-link"
              onClick={open}
            >
              Portofolio
            </Link>
            <Link
              to="service"
              smooth={true}
              spy={true}
              offset={-80}
              className="nav-link"
              onClick={open}
            >
              Service
            </Link>
            <Link
              to="tools"
              smooth={true}
              spy={true}
              offset={10}
              className="nav-link"
              onClick={open}
            >
              Kemampuan
            </Link>
            <Button
              variant="light md-info px-4 rounded-pill mx-3 mx-md-0 ml-md-3 mt-5 mt-md-0"
              href="mailto:alimartondi88@gmail.com"
            >
              Kontak
            </Button>
          </div>
          <Burger
            onClick={() => setState({ active: !state.active })}
            active={state.active}
            burger="spin"
            color={state.active ? "white" : "black"}
            hoverOpacity={0.8}
            scale={1.2}
            style={{
              height: "20px",
              padding: "0",
              margin: "0",
            }}
          />
        </Container>
      </nav>
    </header>
  );
}

// ===On Scroll Logic===
const useScrollHandler = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 8;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
