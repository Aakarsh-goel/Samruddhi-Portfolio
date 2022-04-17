import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import skill1 from "../../Pics/illustrator.png";
import skill2 from "../../Pics/autocad.jpg";
import skill3 from "../../Pics/revit.jpg";
import skill4 from "../../Pics/photoshop.png";
import hero from "../../Pics/hero.jpeg";

const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="container-grid f_flex top">
        <div className="left-container top">
          <h3>WELCOME TO MY WORLD </h3>
          <h2>
            Hi, I'm <span> Samruddhi Modak</span>
          </h2>
          <h2>
            <span>
              {" "}
              <Typewriter
                options={{
                  strings: [
                    "an Architect",
                    "a Designer",
                    "a Dancer",
                    "an Artist",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 80,
                  pauseFor: 10,
                }}
              />
            </span>
          </h2>
          <p> Take the example of a pull quote containing two short paragraphs. The spacing between the paragraphs will depend on the size of the paragraph text, so you could feasibly set that spacing in either rems or ems. Should you decide during your design process that the pull quote should be set a bit larger, then the spacing between the paragraphs must also be increased. Therefore the paragraph spacing is directly related to the paragraph text size and therefore be considered local sizing within a component. Hence you should use ems in this case.</p>
          <div className="hero_btn d_flex">
            <div className="col_1">
              <h4>FIND ME</h4>
              <div className="col1">
              <button className="btn_shadow ">

                <i className="fab fa-instagram"></i>
              </button>
              <button className="btn_shadow">
                <i className="fab fa-linkedin-in"></i>
              </button>
              </div>
            </div>

            <div className="col_1">
              <h4>BEST SKILL ON</h4>
              <div className="col1">
              <button className="btn_shadow">
                <img className="skills" src={skill1} />
              </button>
              <button className="btn_shadow">
                <img className="skills" src={skill2} />{" "}
              </button>
              <button className="btn_shadow">
                <img className="skills" src={skill3} />
              </button>
              <button className="btn_shadow">
                <img className="skills" src={skill4} />
              </button>
              </div>
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="right_img_grid">
            <img src={hero} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
