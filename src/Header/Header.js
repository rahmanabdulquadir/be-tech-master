import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log("context", user);

  const handleSignOut = () =>{
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }

  return (
    <div>
      <div className="navbar bg-zinc-300">
        <div className="flex-1">
          <a className="btn btn-bg-neutral-700 normal-case text-xl">
            Be Tech Master
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link className="text-black" to={"/courses"}>
                Courses
              </Link>
            </li>
            <li tabIndex={0}>
              <Link className="text-black" to={"/faq"}>
                FAQ
              </Link>
            </li>
            <li>
              <Link className="text-black" to={"/blog"}>
                Blog
              </Link>
              {user?.email && (
                <span className="text-black  ">Welcome <br /> {user.email}</span>
              )}
               {
          user?.email ? 
          <button onClick={handleSignOut} className="btn btn-sm">Log Out</button>
          :
          <Link to={'/login'}>
            <button className="btn btn-sm">Log In</button>
          </Link>
        }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
