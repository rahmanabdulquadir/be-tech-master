import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [courses, setCourses] = useState([]);


  useEffect( () => {
    fetch('http://localhost:5000/courses')
    .then(res => res.json())
    .then(data => setCourses(data))
  },[])

  return (
    <div>
      <h2>All Courses: {courses.length}</h2>
     <div className='flex justify-evenly'>
     <div>
     {
        courses.map(course => <p key={course.id}>
          <Link to={`/courseDetails`}>{course.name}</Link>
        </p>)
      }
     </div>
      <div>
      {
        courses.map(course => <div> <div className="card card-compact w-96 bg-base-100 shadow-xl ">
        <figure></figure>
        <div className="card-body ">
          <img src={course.img} alt="" />
          <h2 className="card-title">{course.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link to={'/courseDetails'}><button className="btn btn-primary">Get Premium Access</button></Link>
          </div>
        </div>
      </div> </div>)
      }
      </div>
     </div>
    </div>
  );
};

export default Courses;