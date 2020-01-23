import styles from "../App.module.css";
import ProductsFilter from "./ProductsFilter";
import React, { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("all");
  const [input, setInput] = useState("");

  const clear = p => {
    setValue("all");
    setInput("");
    p.preventDefault();
  };

  return (
    <div className={styles.catalog}>
      <div className={styles.columnLeft}>
        <div className={styles.filter}>
          <div className={styles.filterHeader}>
            <h4>Search</h4>
            <a href="#" className={styles.clear} onClick={clear}>
              Clear
            </a>
          </div>
          <div>
            <input
              value={input}
              type="text"
              placeholder="search..."
              onChange={p => setInput(p.target.value)}
            />
          </div>
          <h4>Manufacturer</h4>
          <div>
            <div>
              <input
                type="radio"
                name="manufacturere"
                id="all"
                value="all"
                checked={value === "all"}
                onClick={() => setValue("all")}
              />
              <label for="all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="manufacturere"
                id="apple"
                value="apple"
                checked={value === "Apple"}
                onClick={() => setValue("Apple")}
              />
              <label for="apple">Apple</label>
            </div>
            <div>
              <input
                type="radio"
                name="manufacturere"
                id="dell"
                value="dell"
                checked={value === "Dell"}
                onClick={() => setValue("Dell")}
              />
              <label for="dell">Dell</label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.columnRight}>
        <ProductsFilter value={value} input={input} />
      </div>
    </div>
  );
};
export default Search;
