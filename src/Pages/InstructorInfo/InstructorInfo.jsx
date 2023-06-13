import React  from 'react';
import useInstructorInfo from '../../Components/hooks/useInstructorInfo';
import { Helmet } from 'react-helmet';
import SectionTItle from '../../Components/SectionTitle/SectionTItle';

const InstructorInfo = () => {
    const [instructorsInfo] = useInstructorInfo();
    console.log(instructorsInfo);
   
    return (
        <>
        <Helmet>
            <title>summer sports || instructors</title>
        </Helmet>
        <div>
            <SectionTItle
            heading="Our Popular Instructors"
            subHeading="see there about info"
            ></SectionTItle>
        </div>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mx-8 my-8'>
            {
                instructorsInfo.map(instructor => <div key={instructor._id} className="card  bg-base-100 shadow-xl">
                <figure><img className='w-96 h-64' src={instructor.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {instructor.name}
                    <div className="badge badge-secondary"> {instructor.category}</div>
                  </h2>
                  <h3 className='font-bold'>Email: {instructor.email}</h3>
                  <p>Experience: {instructor.experience}</p>
                  <p>Number Of CLasses: {instructor.numberOfClasses}</p>
                  <p className='underline font-bold'>Name of classes: </p>
                  <p>
                    <ol>
                    <li>{instructor.nameOfClasses[0]}</li>
                    <li>{instructor.nameOfClasses[1]}</li>
                    <li>{instructor.nameOfClasses[2]}</li></ol>
                  </p>
                  
                </div>
              </div>)
            }
        </div>
        </>
    );
};

export default InstructorInfo;