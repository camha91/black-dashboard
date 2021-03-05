import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import '../panels.scss';

const HorizontalTabs = (props) => {
  const [horizontalTabs, setHorizontalTabs] = useState("profile");

  const toggleActiveTabs = (e, tabState, tabName) => {
    e.preventDefault();
    switch (tabState) {
      case "horizontalTabs":
        setHorizontalTabs(tabName);
        break;
      default:
        break;
    }
  };

  return (
    <div className="content">
      <Row>
        <Col md="6">
          <Card>
            <CardHeader>
              <h5 className="card-category">Navigation Pills</h5>
              <CardTitle tag="h3">Horizontal Tabs</CardTitle>
            </CardHeader>
            <CardBody>
              <Nav className="nav-pills-info" pills>
                <NavItem>
                  <NavLink
                    data-toggle="tab"
                    href="#"
                    className={horizontalTabs === "profile" ? "active" : ""}
                    onClick={(e) =>
                      toggleActiveTabs(e, "horizontalTabs", "profile")
                    }
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    data-toggle="tab"
                    href="#"
                    className={horizontalTabs === "settings" ? "active" : ""}
                    onClick={(e) =>
                      toggleActiveTabs(e, "horizontalTabs", "settings")
                    }
                  >
                    Settings
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    data-toggle="tab"
                    href="#"
                    className={horizontalTabs === "options" ? "active" : ""}
                    onClick={(e) =>
                      toggleActiveTabs(e, "horizontalTabs", "options")
                    }
                  >
                    Options
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent className="tab-space" activeTab={horizontalTabs}>
                <TabPane tabId="profile">
                  Detail-oriented lab professional with four years of experience
                  as a junior embryologist and clinical lab technologist. <br />
                  <br />
                  Skilled at operating in a wide range of platforms. Excellent
                  written and oral communication skills; capable of explaining
                  complex medical terminology in easy-to-understand terms.
                </TabPane>
                <TabPane tabId="settings">
                  On the Home tab or on the Page Layout tab, click the Paragraph
                  Dialog Box Launcher in the Paragraph group. <br />
                  <br />
                  On the Indents and Spacing tab, change the Indent settings to
                  the indentation settings that you want for the document.{" "}
                  <br />
                  <br />
                  Click Tab on the Indents and Spacing tab.
                </TabPane>
                <TabPane tabId="options">
                  An option is a contract giving the buyer the right, but not
                  the obligation, to buy (in the case of a call) or sell (in the
                  case of a put) the underlying asset at a specific price on or
                  before a certain date. <br />
                  <br />
                  People use options for income, to speculate, and to hedge
                  risk.
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HorizontalTabs;
