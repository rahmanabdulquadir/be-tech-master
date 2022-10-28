import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
  return (
    <div>
      <div className="mx-auto card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Congrats!! You have enrolled to this course</h2>
    <p>You are ginne get the further checkout details through your email verification</p>
    <div className="card-actions justify-end">
      <Link to={'/checkout'}><button className="btn">Get Premium Access</button></Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default CourseDetails;