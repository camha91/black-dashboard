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
                <i className="fas fa-angle-left" /> Left
              </Button>
              <Button color="default">
                Right <i className="fas fa-angle-right" />
              </Button>
              <Button color="success">
                <i className="fas fa-check" /> Success
              </Button>
              <br />
              <Button color="info">
                <i className="fas fa-info-circle" /> Info
              </Button>
              <Button color="warning">
                <i className="fas fa-exclamation-triangle" /> Warning
              </Button>
              <Button color="danger">
                <i className="fas fa-trash" /> Danger
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
              <Button color="secondary">Default</Button>
              <Button className="btn-round" color="secondary">
                Round
              </Button>
              <Button className="btn-round" color="secondary">
                <i className="fas fa-heart" /> with icon
              </Button>
              <Button className="btn-round btn-icon" color="secondary">
                <i className="fas fa-heart" />
              </Button>
              <Button className="btn-simple" color="secondary">
                Simple
              </Button>
              <Button className="btn-link" color="secondary">
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
                <Button className="btn-round" color="info" type="button">
                  1
                </Button>
                <Button className="btn-round" color="info" type="button">
                  2
                </Button>
                <Button className="btn-round" color="info" type="button">
                  3
                </Button>
                <Button className="btn-round" color="info" type="button">
                  4
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button className="btn-round" color="info" type="button">
                  5
                </Button>
                <Button className="btn-round" color="info" type="button">
                  6
                </Button>
                <Button className="btn-round" color="info" type="button">
                  7
                </Button>
                <Button className="btn-round" color="info" type="button">
                  8
                </Button>
              </ButtonGroup>
            </CardBody>
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="5">
            <Button color="facebook">
              <i className="fab fa-facebook-square" /> Share · 8.8k
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon" color="facebook">
              <i className="fab fa-facebook-f" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-round" color="facebook">
              <i className="fab fa-facebook-f" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-simple" color="facebook">
              <i className="fab fa-facebook-square" />
            </Button>
          </Col>
          <Col md="3" sm="4">
            <Button className="btn-simple" color="facebook">
              <i className="fab fa-facebook-square" /> Share · 8.8k
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="5">
            <Button color="google">
              <i className="fab fa-google-plus-g" /> Share on Google+
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon" color="google">
              <i className="fab fa-google-plus-g" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-round" color="google">
              <i className="fab fa-google-plus-g" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-simple" color="google">
              <i className="fab fa-google-plus-g" />
            </Button>
          </Col>
          <Col md="3" sm="4">
            <Button className="btn-simple" color="google">
              <i className="fab fa-google-plus-g" /> Share on Google+
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="5">
            <Button color="linkedin">
              <i className="fab fa-linkedin" /> Connect with Linkedin
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon" color="linkedin">
              <i className="fab fa-linkedin" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-round" color="linkedin">
              <i className="fab fa-linkedin" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-simple" color="linkedin">
              <i className="fab fa-linkedin" />
            </Button>
          </Col>
          <Col md="3" sm="4">
            <Button className="btn-simple" color="linkedin">
              <i className="fab fa-linkedin" /> Connect with Linkedin
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="5">
            <Button color="pinterest">
              <i className="fab fa-pinterest" /> Pint it · 102
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon" color="pinterest">
              <i className="fab fa-pinterest" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-round" color="pinterest">
              <i className="fab fa-pinterest" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-simple" color="pinterest">
              <i className="fab fa-pinterest" />
            </Button>
          </Col>
          <Col md="3" sm="4">
            <Button className="btn-simple" color="pinterest">
              <i className="fab fa-pinterest" /> Pint it · 102
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="5">
            <Button color="youtube">
              <i className="fab fa-youtube" /> View on Youtube
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon" color="youtube">
              <i className="fab fa-youtube" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-round" color="youtube">
              <i className="fab fa-youtube" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-simple" color="youtube">
              <i className="fab fa-youtube" />
            </Button>
          </Col>
          <Col md="3" sm="4">
            <Button className="btn-simple" color="youtube">
              <i className="fab fa-youtube" /> View on Youtube
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="5">
            <Button color="tumblr">
              <i className="fab fa-tumblr-square" /> Repost
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon" color="tumblr">
              <i className="fab fa-tumblr" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-round" color="tumblr">
              <i className="fab fa-tumblr" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-simple" color="tumblr">
              <i className="fab fa-tumblr-square" />
            </Button>
          </Col>
          <Col md="3" sm="4">
            <Button className="btn-simple" color="tumblr">
              <i className="fab fa-tumblr-square" /> Repost
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="5">
            <Button color="github">
              <i className="fab fa-github" /> Connect with Github
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon" color="github">
              <i className="fab fa-github" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-round" color="github">
              <i className="fab fa-github" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-simple" color="github">
              <i className="fab fa-github" />
            </Button>
          </Col>
          <Col md="3" sm="4">
            <Button className="btn-simple" color="github">
              <i className="fab fa-github" /> Connect with Github
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="5">
            <Button color="behance">
              <i className="fab fa-behance-square" /> Follow us
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon" color="behance">
              <i className="fab fa-behance" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-round" color="behance">
              <i className="fab fa-behance" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-simple" color="behance">
              <i className="fab fa-behance" />
            </Button>
          </Col>
          <Col md="3" sm="4">
            <Button className="btn-simple" color="behance">
              <i className="fab fa-behance-square" /> Follow us
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="5">
            <Button color="dribbble">
              <i className="fab fa-dribbble" /> Find us on Dribble
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon" color="dribbble">
              <i className="fab fa-dribbble" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-round" color="dribbble">
              <i className="fab fa-dribbble" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-simple" color="dribbble">
              <i className="fab fa-dribbble" />
            </Button>
          </Col>
          <Col md="3" sm="4">
            <Button className="btn-simple" color="dribbble">
              <i className="fab fa-dribbble" /> Find us on Dribble
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="5">
            <Button color="reddit">
              <i className="fab fa-reddit" /> Repost · 272
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon" color="reddit">
              <i className="fab fa-reddit" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-round" color="reddit">
              <i className="fab fa-reddit" />
            </Button>
          </Col>
          <Col md="1" sm="1">
            <Button className="btn-icon btn-simple" color="reddit">
              <i className="fab fa-reddit" />
            </Button>
          </Col>
          <Col md="3" sm="4">
            <Button className="btn-simple" color="reddit">
              <i className="fab fa-reddit" /> Repost · 272
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Buttons;
