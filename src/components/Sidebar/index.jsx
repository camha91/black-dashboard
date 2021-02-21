import React from "react";
import { Nav, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

// const Sidebar = (props) => {
//   return (
//     <div className="sidebar">
//       <p>COMPONENTS</p>
//       <Nav vertical>
//         <li>
//           {/* <NavLink to="/buttons">
//             <Button>BUTTONS</Button>
//           </NavLink> */}
//           <a href="/buttons">
//             // <p>BUTTONS</p>
//             //{" "}
//           </a>
//         </li>
//         {/* <li>
//           <NavLink href="#">GRID SYSTEM</NavLink>
//         </li>
//         <li>
//           <NavLink href="#">PANELS</NavLink>
//         </li>
//         <li>
//           <NavLink href="#">SWEET ALERT</NavLink>
//         </li>
//         <li>
//           <NavLink href="#">NOTIFICATIONS</NavLink>
//         </li>
//         <li>
//           <NavLink href="#">ICONS</NavLink>
//         </li>
//         <li>
//           <NavLink href="#">TYPOGRAPHY</NavLink>
//         </li> */}
//       </Nav>
//     </div>
//   );
// };

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
