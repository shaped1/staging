import React, { useEffect } from "react";
import { motion } from "framer-motion";
import PreLoader from "../components/PreLoader";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as ScrollSVG } from "../assets/images/down-scroll.svg";
import { ReactComponent as Triangle } from "../assets/images/triangle.svg";
import { boxHover, boxExit } from "../animations";
import Footer from "../components/Footer";
import AnimateEl from "../components/AnimateEl";
import Projects from "../components/Projects"

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const text1 = "I code and make";
const text2 = "applications.";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = "polygon";
  }, []);

  return (
    <>
      <PreLoader />

      <motion.div
        exit={{ height: "100vh", transition }}
        className="transition2"
      />

      <div className="landing">
        <section className="landing__top">
          <div className="sub">Front-End Developer</div>
          <h1 className="landing__main">
            <span className="text-con">
              {text1.split("").map((t, i) => (
                <span key={i} className="text">
                  {t}
                </span>
              ))}
              <br />
              {text2.split("").map((t, i) => (
                <span key={i} className="text">
                  {t}
                </span>
              ))}
            </span>
          </h1>
          <h1 className="landing__main2">
            I make websites <br /> and applications.
          </h1>
          <div className="links">
            <NavLink className="item" to="/about">
              About Me
            </NavLink>
            <span className="item">—</span>
            <span className="item">My Projects</span>
          </div>

          <div className="scroll-down">
            <ScrollSVG />
          </div>

          <div className="shapes">
            <div className="main-circle" />
            <div className="shape shape-1" />
            <div className="shape shape-2">
              <Triangle />
            </div>
            <div className="shape shape-3" />
            <div className="shape shape-4" />
          </div>
        </section>

        

        <section className="find-me">

          <div className="social-boxes">
            <a
              href="https://github.com/shapedgod"
              target="_blank"
              rel="noopener noreferrer"
              className="box github"
            >
              <div className="content">
                <i className="fab fa-github-alt"></i>
                <div className="items">
                  <div className="name">Github</div>
                  <div className="user">/shapedgod</div>
                </div>
              </div>
            </a>
            <a
              href="https://twitter.com/polygonthedev"
              target="_blank"
              rel="noopener noreferrer"
              className="box twitter"
            >
              <div className="content">
                <i className="fab fa-twitter"></i>
                <div className="items">
                  <div className="name">Twitter</div>
                  <div className="user">/polygonthedev</div>
                </div>
              </div>
            </a>
            <a
              href="https://codepen.io/shaped"
              target="_blank"
              rel="noopener noreferrer"
              className="box codepen"
            >
              <div className="content">
                <i className="fab fa-codepen"></i>
                <div className="items">
                  <div className="name">Codepen</div>
                  <div className="user">/shaped</div>
                </div>
              </div>
            </a>
          </div>
        </section>
</Projects>
        <section className="contact">
          <div className="topic">Send me a message</div>
          <Link to="/contact">
            <div className="title">Contact</div>
          </Link>
        </section>

        {/* footer exported as component */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
