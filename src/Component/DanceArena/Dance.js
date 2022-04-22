import React from "react";
import Carousel from "react-elastic-carousel";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";
import "./Dance.css";

const Dance = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const videoProperties = [
    {
      id: 1,
      title: "Video1",
      src: "https://youtu.be/xTtbQ2B1Kxo",
      credit: "Video by Samruddhi Modak",
    },
    {
      id: 2,
      title: "Video2",
      src: "https://youtu.be/LAkP5yRQq-U",
      credit: "Video by Samruddhi Modak",
    },

    {
      id: 3,
      title: "Video3",
      src: "https://youtu.be/JlyKioWKnl0",
      credit: "Video by Samruddhi Modak",
    },
    {
      id: 4,
      title: "Video4",
      src: "https://youtu.be/AWzaJ77soPM",
      credit: "Video by Samruddhi Modak",
    },
  ];
  return (
    <div>
      <section className="feautures top" id="dance">
        <div className="container">
          <div className="heading">
            <h4>My Dancing Side</h4>
            <h1>Dance Arena</h1>
          </div>

          <Carousel>
            {videoProperties.map((videoObj) => {
              return (
                <div key={videoObj.id} className="player-wrapper">
                  {isTabletOrMobile ? (
                    <ReactPlayer
                      className="react-player"
                      url={videoObj.src}
                      pip={true}
                      controls={true}
                      width={"100%"}
                      height={"100%"}
                    />
                  ) : (
                    <ReactPlayer
                      className="react-player"
                      url={videoObj.src}
                      pip={true}
                      controls={true}
                    />
                  )}
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Dance;
