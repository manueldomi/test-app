import React from "react";

import { Colors, Dimensions } from "../../../../helpers";

const styles = {
  container: {
    backgroundColor: Colors.white,
    width: "100%",

    height: "100%",

    display: "flex",
    flexDirection: "row"
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "1%"
  },
  field: {
    width: "20%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: Colors.gray,
    fontSize: "1rem"
  }
};

export default styles;
