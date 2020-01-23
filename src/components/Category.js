import React from "react";
import styles from "../App.module.css";

function Category(props) {
  return <h2 className={styles.headerSmall}>{props.text}</h2>;
}
export default Category;
