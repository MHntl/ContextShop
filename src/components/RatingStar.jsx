import React from "react";
import ReactStars from "react-rating-stars-component";

const RatingStar = ({ item }) => {
  const rating = item.rating.rate;
  const Example = {
    size: 30,
    value: rating,
    edit: true,
    isHalf: true,
  };
  return <ReactStars {...Example} />;
};

export default RatingStar;
