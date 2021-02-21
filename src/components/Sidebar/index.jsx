import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <p>COMPONENTS</p>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">BUTTONS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">GRID SYSTEM</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">PANELS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">SWEET ALERT</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">NOTIFICATIONS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">ICONS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">TYPOGRAPHY</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Sidebar;
