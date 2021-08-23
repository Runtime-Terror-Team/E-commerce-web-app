<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";
=======
import PropTypes from 'prop-types'
import React from 'react'
>>>>>>> 0ab11363d77cfa258bb5335f6454684aaee64fea

const Helmet = (props) => {
  document.title = "RTT Store - " + props.title;

<<<<<<< HEAD
  return <div>{props.children}</div>;
};
=======
    document.title = 'RTT Store - ' + props.title

    return (
        <div>
            {props.children}
        </div>
    )
}
>>>>>>> 0ab11363d77cfa258bb5335f6454684aaee64fea

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
