import React from "react";
import { Colors, Dimensions } from "../../../helpers";

const styles = {
  container: {
    backgroundColor: Colors.primary,
    width: "100%",
    minHeight: "20%",
    marginTop: "2%"
  },
  button: {
    backgroundColor: Colors.primary,
    border: `2px solid ${Colors.green}`,
    borderRadius: "1rem",
    width: "5.5rem",
    color: Colors.primary_dark,

    fontSize: "0.6rem",
    fontWeight: "600",
    padding: "6px"
  }
};

export default styles;
