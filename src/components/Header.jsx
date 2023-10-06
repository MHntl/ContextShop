import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/basketContext";

const Header = () => {
  const context = useContext(BasketContext);
  const badgeTotal = context.basket.reduce((total, i) => total + i.amount, 0);

  return (
    <header className="d-flex bg-dark justify-content-between align-items-center p-4 sticky-top">
      <Link className="text-decoration-none" to={"/"}>
        <h2 className="text-light ">Context Store</h2>
      </Link>
      <Link to={"/sepet"}>
        <AiOutlineShoppingCart className="fs-2 text-light" />
        <span className="badge bg-danger mx-2 fs-6">{badgeTotal}</span>
      </Link>
    </header>
  );
};

export default Header;
