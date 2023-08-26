import React from "react";
import { Button } from "@mui/material";

const DeliverItem = ({
  cityFrom,
  cityTo,
  date,
  createdAt,
  onDelete,
}) => {
  return (
    <div className="deliveryItem">
      {cityFrom} - {cityTo}
      <br />
      data - {date}
      <br />
      create at - {createdAt}
      <hr />
      <Button onClick={onDelete} variant="contained">
        Delete
      </Button>
    </div>
  );
};

export default DeliverItem;
