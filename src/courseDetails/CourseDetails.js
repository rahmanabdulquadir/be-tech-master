import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
  return (
    <div>
      <div className="mx-auto card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Congrats!! You have choosen your desiarable tech course</h2>
    <div className="card-actions justify-end">
      <Link to={'/checkout'}><button className="btn">Check Out</button></Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default CourseDetails;