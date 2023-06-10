import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";
import img5 from "../../../assets/img5.jpg";
import img6 from "../../../assets/img6.png";
import img7 from "../../../assets/img7.jpg";

const TopSlider = () => {
  return (
    <div className="">
        <div className=" my-6">
        <h1 className="text-6xl uppercase text-center text-blue-300 font-serif font-semibold">make your summer unforgotable....!</h1>
      </div>
      <Carousel className="text-center">
        <div>
          <img src={img7} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>
        <div>
          <img src={img1} />
        </div>
      </Carousel>
      
    </div>
  );
};

export default TopSlider;
