import React from "react";
import styles from "../App.module.css";

function OneProduct(props) {
  return (
    <div className={styles.product}>
      <img className={styles.productImg} src={props.image} alt={props.name} />
      <p className={styles.price}>${props.price}</p>
      <h3>{props.name}</h3>
    </div>
  );
}

export default OneProduct;
