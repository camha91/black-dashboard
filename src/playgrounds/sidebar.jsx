import React from "react";
import { Nav, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul>
          <li>
            <a href="/buttons">
              <p>BUTTONS</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
