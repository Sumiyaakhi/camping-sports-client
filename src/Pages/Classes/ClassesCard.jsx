import React from 'react';

const ClassesCard = ({singleClass}) => {
    const {  _id, image,name, price, availableSeats,instructor} = singleClass;
    console.log(singleClass);
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Instructor: {instructor}</p>
        <p>Price: ${price}</p>
        <p>Available seat: {availableSeats}</p>
      
        <div className="card-actions justify-center">
          <button className="btn bg-blue-400 text-white px-12">Select</button>
        </div>
      </div>
    </div>
    );
};

export default ClassesCard;