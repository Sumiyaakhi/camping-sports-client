import React from "react";
import useSelectedClasses from "../../../../Components/hooks/useSelectedClasses";
import SelectedClassesCard from "./SelectedClassesCard";

const SelectedClasses = () => {
  const [selectedClasses] = useSelectedClasses();
  console.log("selected classesss", selectedClasses);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name and Image</th>
            <th>Price</th>
            <th>Instructor</th>
            <th>Remove</th>
            <th>Pay</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {selectedClasses.map((selectedClass, index) => (
            <SelectedClassesCard
              key={selectedClass._id}
              selectedClass={selectedClass}
              index={index}
            ></SelectedClassesCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClasses;
