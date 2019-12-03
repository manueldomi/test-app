import React from "react";

import { Colors, Dimensions } from "../../../../helpers";

const styles = {
  container: {
    backgroundColor: Colors.white,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "15rem"
  },
  mediaButtonWrapper: {
    width: "20%",
    height: "100%",
    alignSelf: "flex-emd"
  },
  textWrapper: {
    width: "100%"
  },
  favouriteWrapper: {
    width: "100%",
    textAlign: "center",
    border: `1px solid ${Colors.gray}`,
    height: "15%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.white,
    justifyContent: "space-between"
  },
  list: {
    overflowY: "scroll",
    overflowX: "hidden",
    height: "80%"
  },
  buttonContainer: {
    height: "15%",
    width: "100%",
    backgroundColor: Colors.yellow,
    marginBottom: "1%"
  },
  text: {
    color: Colors.primary_dark,
    margin: 0,
    width: "30%",
    textAlign: "center",
    marginLeft: "35%"
  },
  button: {
    backgroundColor: Colors.primary_dark,
    color: Colors.white,
    border: "none",
    width: "100%",
    height: "100%"
  }
};

export default styles;
