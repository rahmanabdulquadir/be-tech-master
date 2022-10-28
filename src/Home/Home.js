import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex justify-evenly items-center mt-32'>
      <div>
        <h1 className='text-5xl mb-7'>Start Learning and Explore <br /> Your Top Technologies</h1>
        <Link to={'/login'}><button className="btn btn-outline mr-7">Login</button></Link>
        <Link to={'/register'}><button className="btn btn-outline">Register</button></Link>
      </div>
      <div>
        <img src="https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;