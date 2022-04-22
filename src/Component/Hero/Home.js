import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import skill1 from "../../Pics/illustrator.png";
import skill2 from "../../Pics/autocad.jpg";
import skill3 from "../../Pics/revit.jpg";
import skill4 from "../../Pics/photoshop.png";
import hero from "../../Pics/hero-2.jpeg";

const Home = () => {
  return (
    <section className="hero sam-grid" id="home">
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
          <p>
            {" "}
            I am currently at 3rd year pursuing Bachelor of Architecture from
            VNIT, Nagpur. I am deeply interested in being a part of a revolution
            of Sustainable Architecture. At the same time I love thinking about
            interior design and wish to collaborate these two fields. I am also
            a professional Bharatnatyam dancer and bagged titles like{" "}
            <b>"Bharat Kavin Mani", "Kala Bhaskara", and "Natya Kalai Mani" </b>
            . I wish to perform dance at the highest levels both at Classical
            and Western dance types. You must be pretty excited to know about me
            right?
            <br></br> Have a go through my website to learn about me more and
            feel free to ask questions through Contact Me Section. You can also
            visit my LinkedIn and Instagram handles to get further details about
            me.
          </p>
        </div>

        <div className="right-container">
          <div className="right_img_grid">
            <img src={hero} />
          </div>
        </div>
      </div>
      <div className="hero_btn d_flex_find ">
        <div className="col_1">
          <h4>FIND ME</h4>

          <button
            className="btn_shadow "
            onClick={() => console.log("button is clicked")}
          >
            <i className="fab fa-instagram"></i>
          </button>
          <a
            href="https://www.linkedin.com/in/samruddhi-modak-2320551b6/"
            target="_blank"
          >
            <button className="btn_shadow">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </a>
        </div>

        <div className="col_1">
          <h4>BEST SKILL ON</h4>

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
    </section>
  );
};

export default Home;
