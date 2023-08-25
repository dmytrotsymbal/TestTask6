import React from "react";
import { Button } from "@mui/material";

const OrderItem = ({
  cityFrom,
  cityTo,
  description,
  date,
  selectedType,
  createdAt,
  onDelete,
}) => {
  return (
    <div
      style={{ border: "1px solid black", marginBottom: "10px" }}
      className="orderItem"
    >
      {cityFrom} - {cityTo}
      <br />
      {description}
      <br />
      data - {date}
      <br />
      type - {selectedType}
      <br />
      create at - {createdAt}
      <hr />
      <Button onClick={onDelete} variant="contained">
        Delete
      </Button>
    </div>
  );
};

export default OrderItem;
