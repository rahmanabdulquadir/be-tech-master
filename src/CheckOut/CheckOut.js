import React from 'react';
import { Link } from 'react-router-dom';

const CheckOut = () => {
  return (
    <div>
      <div className="mx-auto my-48 card w-96 bg-primary text-primary-content">
  <div className="card-body">
    {/* <h2 className="card-title">Card title!</h2> */}
    <p>You are gonna get the further checkout details through your email verification</p>
    <div className="card-actions justify-end">
     <Link to={'/'}> <button className="btn">Go back to home</button></Link>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default CheckOut;