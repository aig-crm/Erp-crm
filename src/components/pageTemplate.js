import * as React from "react";

const PageTemplate = (props) => {
  return (
    <div
      style={{
        position: "inherit",
        top: "10px",
        left: "10px",
        fontSize: "10px"
      }}
    >
      Page {props.pageNum} of {props.totalPages}
    </div>
  );
};

export default PageTemplate;