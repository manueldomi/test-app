import React from "react";
import { Colors, Dimensions } from "../../helpers";

const styles = {
  container: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: "20%"
  },
  text: {
    color: Colors.primary_dark
  },
  errorContainer: {
    position: "absoulte",
    zIndex: 2,
    top: "0px",
    right: "0px",
    backgroundColor: Colors.gray,
    width: "10%",
    height: "10%"
  }
};

export default styles;
