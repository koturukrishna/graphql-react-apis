import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/apiCallingSlice";
import {
  useGetAllProductsQuery,
  useGetSpecificCategoryProductsQuery,
} from "./redux/pokemon.js";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const DisplayProducts = () => {
  const counter = useSelector((state) => state.counter);
  const [selectedCategory, setSelectedCategory] = useState("jewelery");
  const dispatch = useDispatch();
  console.log(counter);
  const { data } = useGetAllProductsQuery("");
  console.log("Data", data);

  const { data: jeweData } =
    useGetSpecificCategoryProductsQuery(selectedCategory);
  console.log("Category ", jeweData);

  return (
    <div>
      <h1>display products</h1>
      <h4>Value is : {counter.value}</h4>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <select
          name="selectedCategory"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => {
            return <option key={category}>{category}</option>;
          })}
        </select>
        <h4>products</h4>
        {jeweData.map((product) => {
          const { id, title, description, image } = product;
          return (
            <li key={id} style={{ listStyleType: "none" }}>
              <h3>{title.slice(0, 15)}</h3>
              <img
                src={image}
                alt={title}
                style={{ width: "250px", height: "150px" }}
              />
              <h4>{description.slice(0, 15)}</h4>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayProducts;
