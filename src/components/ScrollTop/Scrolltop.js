import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  toTop: {
    zIndex: 5,
    position: "fixed",
    bottom: "5vh",
    backgroundColor: "#DCDCDC",
    color: "black",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#f24638",
      backgroundColor: "#DCDCDC",
    },
    [theme.breakpoints.up("xs")]: {
      right: "4%",
      backgroundColor: "#f24638",
    },
    [theme.breakpoints.up("lg")]: {
      right: "2.5%",
    },
  },
}));
const Scrolltop = ({ showBelow }) => {
  const classes = useStyles();

  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          className={classes.toTop}
          aria-label="to top"
          component="span"
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
    </div>
  );
};
export default Scrolltop;
