import React, { useEffect, useState } from "react";
import SectionTItle from "../../../Components/SectionTitle/SectionTItle";

const PopularClasses = () => {
  const [popularClass, setPopularClass] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/popularClass")
      .then((res) => res.json())
      .then((data) => setPopularClass(data));
  }, []);
  return (
    <div>
      <SectionTItle
        heading="Popular Classes"
        subHeading="Based on number of student"
      ></SectionTItle>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4 ms-8 my-8 ">{
      popularClass.map(singleClass =><div key={singleClass._id} className="card  bg-base-100 shadow-xl">
      <figure><img className="w-screen h-96" src={singleClass.image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
         {singleClass.name}
          <div className="badge badge-secondary">Popular</div>
        </h2>
        <p>Number of Students: {singleClass.numberOfStudent}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{singleClass.category}</div> 
          <div className="badge badge-outline">${singleClass.price}</div>
        </div>
      </div>
    </div>)
      
      }</div>
    </div>
  );
};

export default PopularClasses;
