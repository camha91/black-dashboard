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

const Buttons = (props) => {
  return (
    <div className="content">
      <Card>
        <Row>
          <Col sm="6">
            <CardHeader>
              <CardTitle>Pick your Color</CardTitle>
            </CardHeader>
            <CardBody>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
              <Button color="success">Success</Button>
              <br />
              <Button color="info">Info</Button>
              <Button color="warning">Warning</Button>
              <Button color="danger">Danger</Button>
            </CardBody>
          </Col>
          <Col sm="6">
            <CardHeader>
              <CardTitle>Buttons with Label</CardTitle>
            </CardHeader>
            <CardBody>
              <Button color="default">
                <i className="icon-minimal-left" /> Left
              </Button>
              <Button color="default">
                Right <i className="icon-minimal-right" />
              </Button>
              <Button color="success">
                <i className="tim-icons icon-check-2" /> Success
              </Button>
              <br />
              <Button color="info">
                <i className="tim-icons icon-alert-circle-exc" /> Info
              </Button>
              <Button color="warning">
                <i className="tim-icons icon-time-alarm" /> Warning
              </Button>
              <Button color="danger">
                <i className="tim-icons icon-simple-remove" /> Danger
              </Button>
            </CardBody>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <CardHeader>
              <CardTitle>Pick your Size</CardTitle>
            </CardHeader>
            <CardBody>
              <Button color="primary" size="sm">
                Small
              </Button>
              <Button color="primary">Regular</Button>
              <Button color="primary" size="lg">
                Large
              </Button>
            </CardBody>
          </Col>
          <Col sm="6">
            <CardHeader>
              <CardTitle>Pick your Style</CardTitle>
            </CardHeader>
            <CardBody>
              <Button color="primary">Default</Button>
              <Button className="btn-round" color="primary">
                Round
              </Button>
              <Button className="btn-round" color="primary">
                <i className="icon-heart-2" /> with icon
              </Button>
              <Button className="btn-round btn-icon" color="primary">
                <i className="icon-heart-2" /> Heart icon
              </Button>
              <Button className="btn-simple" color="primary">
                Simple
              </Button>
              <Button className="btn-link" color="primary">
                Link
              </Button>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Buttons;
