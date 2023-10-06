import React from "react";
import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { Link } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";

const Checkout = () => {
  const context = useContext(BasketContext);
  const total = context.basket.reduce(
    (total, i) => total + i.price * i.amount,
    0
  );
  return (
    <div>
      {context.basket.length === 0 ? (
        <div className="d-flex flex-column mt-3 align-items-center">
          <h2>Your Cart is Empty!</h2>
          <br />
          <Link className="text-decoration-none" to={"/"}>
            <h5 className="text-warning  ">Click here to Continue Shopping</h5>
          </Link>
          <p className="mt-3">Have fun exploring the store! 😀</p>
        </div>
      ) : (
        <div>
          <h3 className="text-center my-3">Total {total.toFixed(2)}</h3>
          {context.basket.map((item) => (
            <div className="d-flex justify-content-between align-items-center p-3 gap-3">
              <div className="" style={{ width: "220px" }}>
                <img
                  className="object-fit-contain rounded"
                  src={item.image}
                  height={100}
                />
              </div>
              <h4 title={item.title}>{item.title.slice(0, 15) + "..."}</h4>
              <h3>${(item.price * item.amount).toFixed(2)}</h3>
              <p>miktar: {item.amount}</p>
              {context.isTotalOne && <DeleteModal item={item} />}
              <div className="d-flex gap-1">
                <button
                  className="btn bg-dark text-light "
                  onClick={() => context.addToBasket(item)}
                >
                  +
                </button>
                <button
                  className="btn bg-dark text-light "
                  onClick={() => context.removeFromBasket(item.id)}
                >
                  -
                </button>
              </div>
            </div>
          ))}

          {!context.isClearCart ? (
            <div className="text-center">
              <button
                className="btn btn-lg bg-dark text-light"
                onClick={() => context.setIsClearCart(true)}
              >
                Clear Cart
              </button>
            </div>
          ) : (
            <div className="d-flex flex-column gap-1 align-items-center mt-5">
              <div>
                <h5>
                  Clear
                  <span className="text-danger text-decoration-underline">
                    ALL
                  </span>
                  item?
                </h5>
              </div>
              <div className="d-flex gap-3 mt-2">
                <button
                  onClick={() => context.clearCart()}
                  className="btn bg-dark text-light"
                >
                  Accept
                </button>
                <button
                  className="btn bg-light"
                  onClick={() => context.setIsClearCart(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkout;
