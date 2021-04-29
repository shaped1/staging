import React from "react";
import AnimateEl from "./AnimateEl";  
const Projects = () => {
  return (
<section className="landing__work">
          <AnimateEl>
            <div className="title">
              My <br /> Projects -
            </div>
          </AnimateEl>
         
          <div className="boxes">
          <AnimateEl>
            <a 
              onMouseEnter={boxHover}
              onMouseLeave={boxExit}
              className="box box-1"
              target="_blank"
              rel="noopener noreferrer"
              href="https://shapedgod.github.io/constitution/"
            >
            <div className="box-content">
                  <div className="box-anim p-title">Mers</div>
                  <div className="box-anim p-sub">
                    A constitution for Mers, a fictional country.
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
        </a>
          </AnimateEl>
           {/*
            <AnimateEl>
              <a
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
                className="box box-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://feministco2020.netlify.app/"
              >
                <div className="box-content">
                  <div className="box-anim p-title">Fem Co</div>
                  <div className="box-anim p-sub">
                    A website for the feminist coalition (#EndSars)
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
            <AnimateEl>
              <a
                href="https://printstudio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="box box-2"
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
              >
                <div className="box-content">
                  <div className="box-anim p-title">Print Studio</div>
                  <div className="box-anim p-sub">
                    Online printing platform and shop
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
            <AnimateEl>
              <a
                href="https://santorinis.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="box box-3"
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
              >
                <div className="box-content">
                  <div className="box-anim p-title">Santorinis</div>
                  <div className="box-anim p-sub">
                    A drag and drop pizza maker
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
            <AnimateEl>
              <a
                href="https://hauteafrica.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
                className="box box-4"
              >
                <div className="box-content">
                  <div className="box-anim p-title">Haute Couture</div>
                  <div className="box-anim p-sub">
                    High Fashion brand landing page
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl> */}
          </div> 
          <a
            href="https://github.com/shapedgod"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="more">
              <div className="btn-content">More projects</div>
            </button>
          </a>
        </section>
)}