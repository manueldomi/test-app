import React from "react";

import { Colors, Dimensions } from "../../../helpers";

const styles = {
  container: {
    zIndex: 1,
    backgroundColor: Colors.primary,
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: "row"
  },
  sliderContainer: {
    paddingRight: "2%",
    display: "flex",
    flexDirection: "row",
    width: "60%",
    backgroundColor: Colors.white,
    height: "100%"
  },
  sliderWrapper: {
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  sliderTextContainer: {
    width: "60%"
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
