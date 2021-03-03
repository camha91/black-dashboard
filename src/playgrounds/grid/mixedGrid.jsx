import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import "../grid.scss";

const GridSystem = () => {
  return (
    <>
      <div className="content">
        <h4 className="title pl-3">
          Mixed Grid <small>Showing different sizes on different screens</small>
        </h4>
        <Row>
          <Col lg="3" sm="6">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-sm-6 col-lg-3</code>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-sm-6 col-lg-3</code>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-sm-6 col-lg-3</code>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-sm-6 col-lg-3</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GridSystem;
