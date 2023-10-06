import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";

const MainPage = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(products);
  return (
    <div className="my-3 container d-flex flex-wrap justify-content-center justify-contend-md-between gap-5">
      {products ? (
        products.map((item) => (
          <div>
            <Card key={item.id} item={item} />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MainPage;
