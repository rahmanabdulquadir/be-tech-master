import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import CheckOut from "../../CheckOut/CheckOut";
import CourseDetails from "../../courseDetails/CourseDetails";
import Course from "../../Courses/Course/Course";
import Courses from "../../Courses/Courses";
import FAQ from "../../FAQ/FAQ";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Register from "../../Register/Register";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/courses',
        element: <PrivateRoute><Courses></Courses></PrivateRoute>
      },
      // {
      //   path: '/courses/:id',
      //   element: <Course></Course>
      // },
      {
        path: '/faq',
        element: <FAQ></FAQ>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/courseDetails',
        element: <CourseDetails></CourseDetails>
      },
      {
        path: '/checkout',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
      }
    ]
  },
  {
    path: '*',
    element: <div>
       <div className="card w-96 bg-primary text-primary-content mx-auto">
          <div className="card-body mx-auto">
            <h2 className="card-title">404!!! You have entered in a wrong route!!!</h2>
          </div>
        </div>
    </div>
  }
])