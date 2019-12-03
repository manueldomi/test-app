import React from "react";
import { FaSearch } from "react-icons/fa";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

const useStyles = makeStyles({
  root: {
    marginTop: "5%",
    width: "70%",
    height: "100%"
  }
});

const FilterBar = ({ onInputChange, value, valueSlide, onSlideChange }) => {
  const classes = useStyles();
  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <FaSearch />
      </div>
      <input
        placeholder="Search"
        style={styles.input}
        value={value}
        onChange={(e) => {
          onInputChange(e);
        }}
      ></input>
      <div style={styles.sliderContainer}>
        <div style={styles.sliderTextContainer}>
          <p>
            Age filter: {valueSlide[0]}-{valueSlide[1]}
          </p>
        </div>
        <div style={styles.sliderWrapper}>
          <Slider
            onChange={onSlideChange}
            className={classes.root}
            value={valueSlide}
            valueLabelDisplay="off"
            aria-labelledby="range-slider"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
