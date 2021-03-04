import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

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
        <h3 className="title mt-5 text-center">Paragraphs</h3>
        <CardBody>
          <Row>
            <Col sm="6">
              <h3 className="mt-5">Some Title Here</h3>
              <p>
                October arrived, spreading a damp chill over the grounds and
                into the castle. Madam Pomfrey, the nurse, was kept busy by a
                sudden spate of colds among the staff and students. Her Pepperup
                potion worked instantly, though it left the drinker smoking at
                the ears for several hours afterward. Ginny Weasley, who had
                been looking pale, was bullied into taking some by Percy. The
                steam pouring from under her vivid hair gave the impression that
                her whole head was on fire.
              </p>
            </Col>
            <Col sm="6">
              <h3 className="mt-5">Another Title Here</h3>
              <p>
                October arrived, spreading a damp chill over the grounds and
                into the castle. Madam Pomfrey, the nurse, was kept busy by a
                sudden spate of colds among the staff and students. Her Pepperup
                potion worked instantly, though it left the drinker smoking at
                the ears for several hours afterward. Ginny Weasley, who had
                been looking pale, was bullied into taking some by Percy. The
                steam pouring from under her vivid hair gave the impression that
                her whole head was on fire.
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm="4">
              <h3 className="mt-5">Some Title Here</h3>
              <p>
                October arrived, spreading a damp chill over the grounds and
                into the castle. Madam Pomfrey, the nurse, was kept busy by a
                sudden spate of colds among the staff and students. Her Pepperup
                potion worked instantly, though it left the drinker smoking at
                the ears for several hours afterward. Ginny Weasley, who had
                been looking pale, was bullied into taking some by Percy. The
                steam pouring from under her vivid hair gave the impression that
                her whole head was on fire.
              </p>
            </Col>
            <Col sm="4">
              <h3 className="mt-5">Another Title Here</h3>
              <p>
                October arrived, spreading a damp chill over the grounds and
                into the castle. Madam Pomfrey, the nurse, was kept busy by a
                sudden spate of colds among the staff and students. Her Pepperup
                potion worked instantly, though it left the drinker smoking at
                the ears for several hours afterward. Ginny Weasley, who had
                been looking pale, was bullied into taking some by Percy. The
                steam pouring from under her vivid hair gave the impression that
                her whole head was on fire.
              </p>
            </Col>
            <Col sm="4">
              <h3 className="mt-5">Another Title Here</h3>
              <p>
                October arrived, spreading a damp chill over the grounds and
                into the castle. Madam Pomfrey, the nurse, was kept busy by a
                sudden spate of colds among the staff and students. Her Pepperup
                potion worked instantly, though it left the drinker smoking at
                the ears for several hours afterward. Ginny Weasley, who had
                been looking pale, was bullied into taking some by Percy. The
                steam pouring from under her vivid hair gave the impression that
                her whole head was on fire.
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm="4">
              <h3 className="mt-5">Some Title Here</h3>
              <p>
                October arrived, spreading a damp chill over the grounds and
                into the castle. Madam Pomfrey, the nurse, was kept busy by a
                sudden spate of colds among the staff and students. Her Pepperup
                potion worked instantly, though it left the drinker smoking at
                the ears for several hours afterward. Ginny Weasley, who had
                been looking pale, was bullied into taking some by Percy. The
                steam pouring from under her vivid hair gave the impression that
                her whole head was on fire.
              </p>
            </Col>
            <Col sm="8">
              <h3 className="mt-5">Another Title Here</h3>
              <p>
                October arrived, spreading a damp chill over the grounds and
                into the castle. Madam Pomfrey, the nurse, was kept busy by a
                sudden spate of colds among the staff and students. Her Pepperup
                potion worked instantly, though it left the drinker smoking at
                the ears for several hours afterward. Ginny Weasley, who had
                been looking pale, was bullied into taking some by Percy. The
                steam pouring from under her vivid hair gave the impression that
                her whole head was on fire.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    </>
  );
};

export default GridSystem;
