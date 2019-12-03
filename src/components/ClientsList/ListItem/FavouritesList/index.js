import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaEdit, FaBackward, FaStar } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import { Colors } from "../../../../helpers";

const useStyles = makeStyles((theme) => ({
  button: {
    height: "100%",
    width: "2rem",
    backgroundColor: Colors.light_grey
  }
}));

const FavouritesList = ({ data, venues, onPress }) => {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const renderFavourites = () => {
    const render = data.map((favourite) => (
      <div style={styles.favouriteWrapper}>
        <p style={styles.text}>{favourite.name}</p>
      </div>
    ));
    if (render.length === 0)
      return (
        <div style={styles.favouriteWrapper}>
          <p style={{ ...styles.text, ...{ color: Colors.primary_dark } }}>
            There isnt any favourites yet
          </p>
        </div>
      );
    return render;
  };
  const renderCompanies = () => {
    const render = venues.map((venue) => {
      const isFavourite = data.find((favourite) => favourite.id === venue.id);
      return (
        <div style={styles.favouriteWrapper}>
          <p style={styles.text}>{venue.name}</p>

          <div style={styles.mediaButtonWrapper}>
            <Button
              onClick={() => onPress(venue.id, isFavourite)}
              className={classes.button}
            >
              <FaStar color={isFavourite ? Colors.yellow : Colors.white} />
            </Button>
          </div>
        </div>
      );
    });
    return render;
  };
  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button
          style={{
            ...styles.button,
            ...{
              border: !isEditing
                ? `2px solid ${Colors.green}`
                : `2px solid ${Colors.red}`
            }
          }}
          onClick={() => setIsEditing(!isEditing)}
        >
          {!isEditing ? "EDIT FAVOURITES" : "VIEW FAVOURITES"}
        </button>
      </div>

      <div style={styles.list}>
        {isEditing ? renderCompanies() : renderFavourites()}
      </div>
    </div>
  );
};

export default FavouritesList;
