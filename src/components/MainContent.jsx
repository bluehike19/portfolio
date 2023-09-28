import React from "react";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <>
      <div className="introduction">
        <div className="typewriter-div">
          <TypeAnimation
            sequence={[
              "Hi there, my name is Hike and, I'm a passionate web-developer",
              500,
              "Hi there, my name is Hike and, very hard-working",
              500,
              "Hi there, my name is Hike and, always earger to learn new things",
              500,
              "Hi there, my name is Hike and, very professional",
              500,
              "Hi there, my name is Hike and, I'm always open to working with anyone",
              500,
              "Hi there, my name is Hike and, I hope your are going to like my previous work",
              500,
            ]}
            wrapper="span"
            speed={40}
            className="typewriter"
            repeat={Infinity}
          />
        </div>
        <div className="floating-pic">
          <div className="profile">
            <img src="dp/dp-pic2.jpg" className="dp" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
