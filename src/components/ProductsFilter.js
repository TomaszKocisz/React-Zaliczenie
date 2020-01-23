import React from "react";
import styles from "../App.module.css";
import ProductsService from "./services/products.service";
import OneProduct from "./Product";

const products = ProductsService.getProducts();

function ProductsFilter(props) {
  let filter;

  if (props.value === "all") {
    filter = products;
  } else if (props.value === "Dell") {
    filter = products.filter(product => product.manufacture === "Dell");
  } else if (props.value === "Apple") {
    filter = products.filter(product => product.manufacture === "Apple");
  }
  return (
    <div className={styles.products}>
      {filter
        .filter(product => product.name.includes(props.input))
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
}
export default ProductsFilter;
