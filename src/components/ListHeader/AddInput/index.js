import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Colors } from "../../../helpers/";

import styles from "./styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: Colors.green,
    color: Colors.primary_dark,
    width: "8rem"
  },
  buttonCancel: {
    margin: theme.spacing(1),
    backgroundColor: Colors.red,
    color: Colors.white,
    width: "8rem"
  }
}));

const AddField = ({
  type,
  onCancelPress,
  name,
  email,
  age,
  firstName,
  lastName,
  companyName,
  onInputChange,
  onAcceptPress
}) => {
  const classes = useStyles();
  const clientType = (
    <div style={styles.container}>
      <div style={styles.inputContainer}>
        <TextField
          label="Name"
          value={name}
          name="name"
          placeholder="Name"
          onChange={onInputChange}
        />
      </div>
      <div style={styles.inputContainer}>
        <TextField
          label="Email"
          value={email}
          name="email"
          placeholder="Email"
          onChange={onInputChange}
        />
      </div>
      <div style={styles.inputContainer}>
        <TextField
          label="Age"
          value={age}
          name="age"
          placeholder="Age"
          type="number"
          onChange={onInputChange}
        />
      </div>
      <div style={styles.inputContainer}>
        <TextField
          label="First Name"
          value={firstName}
          name="firstName"
          placeholder="First name"
          onChange={onInputChange}
        />
      </div>
      <div style={styles.inputContainer}>
        <TextField
          label="Last Name"
          value={lastName}
          name="lastName"
          placeholder="Last name"
          onChange={onInputChange}
        />
      </div>
      <div style={styles.inputContainer}>
        <Button
          className={classes.button}
          onClick={onAcceptPress}
          variant="contained"
          startIcon={<FaPlus />}
        >
          Confirm
        </Button>
      </div>
      <div style={styles.inputContainer}>
        <Button
          className={classes.buttonCancel}
          onClick={onCancelPress}
          variant="contained"
          startIcon={<FaMinus />}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
  const companyType = (
    <div style={styles.container}>
      <div style={styles.inputContainer}>
        <TextField
          label="Venue Name"
          value={companyName}
          name="companyName"
          placeholder="Venue name"
          onChange={onInputChange}
        />
      </div>
      <div style={styles.inputContainer}>
        <Button
          className={classes.button}
          onClick={onAcceptPress}
          variant="contained"
          startIcon={<FaPlus />}
        >
          Confirm
        </Button>
      </div>
      <div style={styles.inputContainer}>
        <Button
          className={classes.buttonCancel}
          onClick={onCancelPress}
          variant="contained"
          startIcon={<FaMinus />}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
  return type === "CLIENT" ? clientType : companyType;
};

export default AddField;
