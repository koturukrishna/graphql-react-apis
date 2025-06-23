import React, { useEffect, useState } from "react";
import axios from "axios";

const useAPICall = (
  url,
  method = "GET",
  data = null,
  headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  }
) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios({
      url,
      method,
      headers,
      data,
    })
      .then((res) => {
        setProductList(res.data);
        console.log("api response", res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  //   useEffect(() => {
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

  //     axios
  //       .get(
  //         "https://fakestoreapi.com/products",
  //         {},
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Accept: "application/json",
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //         setProductList(res.data);
  //       })
  //       .catch((error) => console.log("Error", error));
  //   }, []);
  return [productList];
};

export default useAPICall;
