import React from "react";
import { Nav } from "reactstrap";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <p>COMPONENTS</p>
        <Nav vertical>
          <li>
            <a href="/buttons">
              <p>BUTTONS</p>
            </a>
          </li>
          <li>
            <a href="/grid-system">
              <p>GRID SYSTEM</p>
            </a>
          </li>
          <li>
            <a href="/panels">
              <p>PANELS</p>
            </a>
          </li>
          <li>
            <a href="/sweet-alert">
              <p>SWEET ALERT</p>
            </a>
          </li>
          <li>
            <a href="/notifications">
              <p>NOTIFICATIONS</p>
            </a>
          </li>
          <li>
            <a href="/icons">
              <p>ICONS</p>
            </a>
          </li>
          <li>
            <a href="/typography">
              <p>TYPOGRAPHY</p>
            </a>
          </li>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
