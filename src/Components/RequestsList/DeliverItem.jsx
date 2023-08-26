import React from "react";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const DeliverItem = ({
  cityFrom,
  cityTo,
  date,
  createdAt,
  onDelete,
}) => {
  return (
    <Card className="deliveryItem">
      <CardContent>
        <h4>From {cityFrom} - to {cityTo}</h4>
        <strong> Date of dispatch - {date}</strong>
        <p>
          Request created at - {createdAt}
        </p>
      </CardContent>

      <CardActions className="actions">
        <Button variant="contained" onClick={onDelete} startIcon={<DeleteIcon />}>
          Delete
        </Button>

        <Button variant="contained" startIcon={<EditIcon />}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default DeliverItem;
