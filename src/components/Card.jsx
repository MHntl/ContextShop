import React, { useContext } from "react";
import RatingStar from "./RatingStar";
import { ToastContainer, toast } from "react-toastify";
import { BasketContext } from "../context/basketContext";

const Card = ({ item }) => {
  const context = useContext(BasketContext);
  // console.log(context);
  return (
    <div className="card py-2" style={{ width: "250px" }}>
      <div className="d-flex justify-content-center">
        <img
          className="object-fit-contain"
          src={item.image}
          title={item.title}
          height={120}
        />
      </div>
      <div
        style={{ height: "320px" }}
        className="card-body d-flex flex-column justify-content-between"
      >
        <h4 title={item.title}>
          {item.title.length > 40
            ? item.title.slice(0, 40) + "..."
            : item.title}
        </h4>
        <p className="text-success fw-bold">${item.price}</p>
        <p>{item.category.toUpperCase()}</p>
        <span onClick={() => context.notify()}>
          <ToastContainer />
          <RatingStar item={item} />
        </span>
        <button
          onClick={() => context.addToBasket(item)}
          className="btn bg-dark text-light w-100"
        >
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
