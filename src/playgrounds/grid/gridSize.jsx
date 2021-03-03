import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import "../grid.scss";

const GridSystem = () => {
  return (
    <>
      <div className="content">
        <h4 className="title pl-3">
          XS Grid <small>Always Horizontal</small>
        </h4>
        <Row>
          <Col xs="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col xs="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col xs="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-4</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4 className="title pl-3">
          SM Grid <small>Collapsed at 576px</small>
        </h4>
        <Row>
          <Col sm="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-sm-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-sm-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-sm-4</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4 className="title pl-3">
          MD Grid <small>Collapsed at 768px</small>
        </h4>
        <Row>
          <Col md="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-md-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-md-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-md-4</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4 className="title pl-3">
          LG Grid <small>Collapsed at 992px</small>
        </h4>
        <Row>
          <Col lg="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-lg-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-lg-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-lg-4</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4 className="title pl-3">
          XL Grid <small>Collapsed at 1200px</small>
        </h4>
        <Row>
          <Col xl="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-xl-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-xl-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card>
              <CardBody className="text-center py-5">
                <code>col-xl-4</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GridSystem;
