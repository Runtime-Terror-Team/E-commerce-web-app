import React from "react";
import PropTypes from "prop-types";

const Helmet = (props) => {
  document.title = "RTT Store - " + props.title;

  return <div>{props.children}</div>;
};

Helmet.propsTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
