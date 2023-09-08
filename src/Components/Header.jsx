import React from "react";
import "./header.css";
import Input from "./Input";

const Header = (props) => {
  return (
    <div className="container">
      <header>
        <div>
          <img src="images.png" alt="" />
        </div>
        <Input
          className="searchBar"
          type="text"
          
          placeholder="Search..."
          onChange={props.onChange}
        />
       
        

        <div>
          <img className="icons" src="profile-image.jpg" alt="" />
        </div>
      </header>
      
    </div>
  );
};

export default Header;
