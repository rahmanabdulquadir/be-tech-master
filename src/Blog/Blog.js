import React from "react";

const Blog = () => {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-2 gap-4 mt-10 ml-36">
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">what is cors?</h2>
            <p>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources.{" "}
            </p>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h2>
            <p>
              Firebase Authentication aims to make building secure
              authentication systems easy, while improving the sign-in and
              onboarding experience for end users. It provides an end-to-end
              identity solution, supporting email and password accounts, phone
              auth, and Google, Twitter, Facebook, and GitHub login, and more.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">How does the private route work?</h2>
            <p>
              The react private route component renders child components (
              children ) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">What is Node? How does Node work</h2>
            <p>
              t is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
