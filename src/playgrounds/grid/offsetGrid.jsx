import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import "../grid.scss";

const OffsetGrid = () => {
  return (
    <>
      <div className="content">
        <h4 className="title pl-3">
          Offset Grid <small>Adding some space when needed</small>
        </h4>
        <Row>
          <Col md="3">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-md-3</code>
              </CardBody>
            </Card>
          </Col>
          <Col className="ml-auto" md="3">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-md-3 ml-auto</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="ml-auto mr-auto" md="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-md-4 ml-auto mr-auto</code>
              </CardBody>
            </Card>
          </Col>
          <Col className="ml-auto mr-auto" md="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-md-4 ml-auto mr-auto</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="ml-auto mr-auto" md="6">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-md-6 ml-auto mr-auto</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OffsetGrid;
