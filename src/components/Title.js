import React from "react";
import styles from "../App.module.css";
import PropTypes from "prop-types";

function Title(props) {
  return <h1 className={styles.headerBig}>{props.text}</h1>;
}

Title.propTypes = { text: PropTypes.string };

export default Title;
