import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
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

        <Row>
          <Col sm="6">
            <CardHeader>
              <CardTitle>Pagination</CardTitle>
            </CardHeader>
            <CardBody>
              <nav aria-label="Page navigation example">
                <Pagination
                  className="pagination pagination-warning"
                  listClassName="pagination-warning"
                >
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      4
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      5
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink
                      previous
                      aria-label="Previous"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      next
                      aria-label="Next"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    />
                  </PaginationItem>
                </Pagination>
              </nav>
            </CardBody>
          </Col>

          <Col sm="6">
            <CardHeader>
              <CardTitle>Pick your Style</CardTitle>
            </CardHeader>
            <CardBody>
              <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
              <br />
              <br />
              <ButtonGroup data-toggle="buttons">
                <Button className="btn-round" color="primary" type="button">
                  1
                </Button>
                <Button className="btn-round" color="primary" type="button">
                  2
                </Button>
                <Button className="btn-round" color="primary" type="button">
                  3
                </Button>
                <Button className="btn-round" color="primary" type="button">
                  4
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button className="btn-round" color="primary" type="button">
                  5
                </Button>
                <Button className="btn-round" color="primary" type="button">
                  6
                </Button>
                <Button className="btn-round" color="primary" type="button">
                  7
                </Button>
                <Button className="btn-round" color="primary" type="button">
                  8
                </Button>
              </ButtonGroup>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Buttons;
