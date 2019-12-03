import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import styles from "./styles";
import { Colors } from "../../../../helpers";

const ClientShow = ({ data, onPress, active }) => {
  const { name, email, age, firstName, lastName, favoriteVenues } = data;
  return (
    <div style={styles.container}>
      <div style={styles.iconContainer} onClick={onPress}>
        {active ? (
          <FaAngleUp color={Colors.primary_dark} />
        ) : (
          <FaAngleDown color={Colors.primary_dark} />
        )}
      </div>
      <div style={styles.field}>
        <p style={styles.text}>{name}</p>
      </div>
      <div style={styles.field}>
        <p style={styles.text}>{email}</p>
      </div>
      <div style={styles.field}>
        <p style={styles.text}>{age}</p>
      </div>
      <div style={styles.field}>
        <p style={styles.text}>{firstName}</p>
      </div>
      <div style={styles.field}>
        <p style={styles.text}>{lastName}</p>
      </div>
    </div>
  );
};

export default ClientShow;
