import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import "../buttons.scss";

const Example = (props) => {
  return (
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
    // <ButtonGroup data-toggle="buttons">
    //   <Button className="btn-round" color="primary" type="button">
    //     1
    //   </Button>
    //   <Button className="btn-round" color="primary" type="button">
    //     2
    //   </Button>
    //   <Button className="btn-round" color="primary" type="button">
    //     3
    //   </Button>
    //   <Button className="btn-round" color="primary" type="button">
    //     4
    //   </Button>
    // </ButtonGroup>
    // <ButtonGroup>
    //     <Button className="btn-round" color="primary" type="button">
    //     5
    //     </Button>
    //     <Button className="btn-round" color="primary" type="button">
    //     6
    //     </Button>
    //     <Button className="btn-round" color="primary" type="button">
    //     7
    //     </Button>
    //     <Button className="btn-round" color="primary" type="button">
    //     8
    //     </Button>
    // </ButtonGroup>
  );
};

export default Example;
