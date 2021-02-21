import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const Example = (props) => {
  return (
    <div className="content">
      <Card>
        <Row>
          <Col sm="6">
            <CardHeader>
              <CardTitle>Pick your Color</CardTitle>
            </CardHeader>
            <CardBody>
              <Button className="btn btn-primary">Primary</Button>
              <Button className="btn btn-secondary">Secondary</Button>
              <Button className="btn btn-success">Success</Button>
              <Button className="btn btn-info">Info</Button>
              <Button className="btn btn-warning">Warning</Button>
              <Button className="btn btn-danger">Danger</Button>
            </CardBody>
          </Col>
          <Col sm="6">
            <CardHeader>
              <CardTitle>Buttons with Label</CardTitle>
            </CardHeader>
            <CardBody>
              <Button className="btn btn-primary">Primary</Button>
              <Button className="btn btn-secondary">Secondary</Button>
              <Button className="btn btn-success">Success</Button>
              <Button className="btn btn-info">Info</Button>
              <Button className="btn btn-warning">Warning</Button>
              <Button className="btn btn-danger">Danger</Button>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Example;
