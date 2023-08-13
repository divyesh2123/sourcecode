import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const PageNotFound = () => {
  return (
    <div id="oopss">
      <div id="error-text">
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
        />
        <span>404 PAGE</span>
        <p className="p-a">
          . The page you were looking for could not be found
        </p>
        <Link to="/login" className="btn btn-lg custom-Red">
          Back To Login Page
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
