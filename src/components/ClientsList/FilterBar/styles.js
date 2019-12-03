import React from "react";

import { Colors, Dimensions } from "../../../helpers";

const styles = {
  container: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: "12%",
    display: "flex",
    flexDirection: "row"
  },
  sliderContainer: {
    width: "30%",
    backgroundColor: Colors.white,
    height: "100%"
  },
  iconContainer: {
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    paddingLeft: "1%",
    paddingRight: "1%"
  },
  input: {
    paddingLeft: "1%",
    width: "100%",
    border: "none"
  }
};

export default styles;
