import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FaPlus } from "react-icons/fa";
import { Colors } from "../../../helpers/";

import styles from "./styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: Colors.green,
    color: Colors.primary_dark,
    width: "8rem"
  }
}));

const AddField = ({ title, onPress }) => {
  const classes = useStyles();
  return (
    <div style={styles.container}>
      <Button
        className={classes.button}
        onClick={onPress}
        variant="contained"
        startIcon={<FaPlus />}
      >
        {title}
      </Button>
    </div>
  );
};

export default AddField;
