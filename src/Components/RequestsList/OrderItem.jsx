import React from "react";
import { useState } from "react";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from "react-redux";
import { editRequest } from "../../Redux/requestSlice";

const OrderItem = ({
  cityFrom,
  cityTo,
  description,
  date,
  selectedType,
  createdAt,
  onDelete,
}) => {
  const dispatch = useDispatch();
  const [isEditingPopup, setIsEditingPopup] = useState(false);
  const [editedCityFrom, setEditedCityFrom] = useState(cityFrom);
  const [editedCityTo, setEditedCityTo] = useState(cityTo);
  const [editedDate, setEditedDate] = useState(date);
  const [editedDescription, setEditedDescription] = useState(description);

  const startEditFunc = () => {
    setIsEditingPopup(true);
  }

  const SaveFunc = () => {
    dispatch(
      editRequest({
        cityFrom: editedCityFrom,
        cityTo: editedCityTo,
        date: editedDate,
        description: editedDescription
      })
    );
    setIsEditingPopup(false);
  };

  return (
    <Card className="orderItem">
      <CardContent>

        {isEditingPopup ? (
          <div className="popupBack">
            <div className="popup">
              <input type="text" value={editedCityFrom} onChange={(e) => setEditedCityFrom(e.target.value)} />
              <input type="text" value={editedCityTo} onChange={(e) => setEditedCityTo(e.target.value)} />
              <input type="date" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} />
              <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
              <div className="popupActions">
                <Button variant="contained" onClick={SaveFunc} startIcon={<CheckIcon />}>
                  Save
                </Button>
                <Button variant="contained" onClick={() => setIsEditingPopup(false)} startIcon={<ClearIcon />}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h4>From {editedCityFrom} - to {editedCityTo}</h4>
            <strong> Date of dispatch - {editedDate}</strong>
            <p>
              Type of parcel - {selectedType}
            </p>
            <p>Description: {editedDescription}</p>
            <p>
              Request created at - {createdAt}
            </p>
          </div>
        )
        }
      </CardContent>

      <CardActions className="actions">
        <Button variant="contained" onClick={onDelete} startIcon={<DeleteIcon />}>
          Delete
        </Button>

        <Button variant="contained" onClick={startEditFunc} startIcon={<EditIcon />}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default OrderItem;
