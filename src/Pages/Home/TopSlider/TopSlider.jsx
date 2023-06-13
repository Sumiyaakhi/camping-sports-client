import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";
import img5 from "../../../assets/img5.jpg";
import img6 from "../../../assets/img6.png";
import img7 from "../../../assets/img7.jpg";
import SectionTItle from "../../../Components/SectionTitle/SectionTItle";



const TopSlider = () => {
  

  return (
    <div className="">
        <div className=" my-6">
            <SectionTItle 
              heading='make your summer unforgotable....!'
              subHeading='top slider '
            ></SectionTItle>
        <h1 className="text-6xl uppercase text-center text-blue-300 font-serif font-semibold"></h1>
      </div>
      <div className="carousel w-screen">
  <div id="item1" className="carousel-item w-full">
    <img src={img6} className="w-screen" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={img3} className="w-screen" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={img4} className="w-screen" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={img2} className="w-screen" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
  );
};

export default TopSlider;
