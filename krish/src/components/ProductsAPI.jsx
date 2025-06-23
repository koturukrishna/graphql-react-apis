import React, { useEffect, useState } from "react";
import axios from "axios";
import useAPICall from "./custom-hooks/UseAPICall";

const ProductsAPI = () => {
  const [productList, setProductList] = useState([]);
  const response = useAPICall("https://fakestoreapi.com/products");
  console.log("response", response);

  useEffect(() => {
    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((res) => {
    //     console.log(res.data);
    //     setProductList(res.data);
    //   })
    //   .catch((error) => console.log("Error:", error));
    // axios({
    //   url: "https://fakestoreapi.com/products",
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   data: "",
    // })
    //   .then((res) => console.log(res.data))
    //   .catch((error) => console.log("Error", error));

    axios
      .get(
        "https://fakestoreapi.com/products",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <div>
      <h3>list of available products</h3>
    </div>
  );
};

export default ProductsAPI;
