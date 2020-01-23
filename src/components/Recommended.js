import React from "react";
import styles from "../App.module.css";
import products from "../products.json";
import OneProduct from "./Product";

const Recommended = props => (
  <div className={styles.products}>
    {products
      .filter(
        products =>
          products.featured === true && products.category === props.category
      )
      .map(products => (
        <OneProduct
          id={products.id}
          image={products.image}
          price={products.amount}
          name={products.name}
        />
      ))}
  </div>
);

export default Recommended;
