import React from "react";
import { Colors, Dimensions } from "../../../helpers";

const styles = {
  container: {
    backgroundColor: Colors.primary,
    width: "100%",
    minHeight: "20%",
    display: "flex",
    flexDirection: "row"
  },
  inputContainer: {
    width: "15%",
    marginRight: "1%"
  },
  input: {
    width: "100%",
    backgroundColor: Colors.primary,
    border: "none",
    borderBottom: "1px solid white"
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
