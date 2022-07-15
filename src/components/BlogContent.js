import React from "react";

function BlogContent(props) {
  return <div id="blog-content">{props.myName} and {props.title}</div>;
}

export default BlogContent;
