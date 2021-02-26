import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "../buttons.scss";

const Example = (props) => {
  return (
    <nav aria-label="Page navigation example">
      <Pagination
        className="pagination pagination-info"
        listClassName="pagination-info"
      >
        <PaginationItem className="active">
          <PaginationLink href="#" onClick={(e) => e.preventDefault()}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={(e) => e.preventDefault()}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={(e) => e.preventDefault()}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={(e) => e.preventDefault()}>
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={(e) => e.preventDefault()}>
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
          <PaginationLink href="#" onClick={(e) => e.preventDefault()}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="active">
          <PaginationLink href="#" onClick={(e) => e.preventDefault()}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={(e) => e.preventDefault()}>
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
  );
};

export default Example;
