import React, { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const DeleteModal = ({ item }) => {
  const context = useContext(BasketContext);
  console.log(context);
  return (
    <div className="deleteModal">
      <div className="deleteModalInner">
        <div className="d-flex flex-column align-items-center">
          <p className="text-danger fw-bold">Delete Item?</p>
          <div className="d-flex gap-1">
            <button
              onClick={() => {
                context.deleteItem(item.id);
                context.setIsTotalOne(false);
              }}
              className="btn bg-danger text-light"
            >
              Accept
            </button>
            <button
              className="btn bg-dark text-light"
              onClick={() => context.setIsTotalOne(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
