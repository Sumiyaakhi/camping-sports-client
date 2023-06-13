import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
const Animation = () => {
  return (
    <div>
      <Slide>
        <h1 className="text-5xl font-bold font-serif text-blue-400 my-3">
          Summer Camp is awesome with sports
        </h1>
      </Slide>
      <Fade className="text-2xl" delay={1e3} cascade damping={1e-1}>
        Let's see and take awesome things.. yey!!
      </Fade>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2">
        <div>
          {" "}
          <img
            className="w-screen "
            src="https://i.ibb.co/w4KB8mN/images-7.jpg"
            alt=""
          />
        </div>
        <div>
          {" "}
          <img  className="w-screen " src="https://i.ibb.co/XJ71KRt/images-8.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Animation;
